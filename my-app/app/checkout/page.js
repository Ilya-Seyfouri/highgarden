'use client';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getProductBySlug, priceToNumber, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/CartContext';
import { createOrder } from '@/lib/supabase';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const STRIPE_APPEARANCE = {
  theme: 'stripe',
  variables: {
    colorPrimary: '#334f2b',
    colorBackground: '#ffffff',
    colorText: '#1c1b1f',
    colorDanger: '#c4724a',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    borderRadius: '0px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': {
      border: '1px solid #cad3c4',
      padding: '14px 16px',
      fontSize: '16px',
    },
    '.Input:focus': {
      border: '1px solid #334f2b',
      boxShadow: '0 0 0 1px #334f2b',
    },
    '.Label': {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '8px',
      color: '#1c1b1f',
    },
    '.Tab': { border: '1px solid #cad3c4' },
    '.Tab--selected': { border: '1px solid #334f2b' },
  },
};

function StepIndicator({ step }) {
  const steps = ['Basket', 'Details', 'Payment', 'Confirm'];
  return (
    <ol className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
      {steps.map((label, i) => {
        const idx = i + 1;
        const active = idx === step;
        const done = idx < step;
        return (
          <li key={label} className="flex items-center gap-2 sm:gap-4">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center font-body-md text-xs font-bold border-2 transition-colors ${
                done
                  ? 'bg-brand-sage text-white border-brand-sage'
                  : active
                    ? 'bg-white text-brand-sage border-brand-sage'
                    : 'bg-white text-on-surface-variant border-outline-variant'
              }`}
            >
              {done ? (
                <span className="material-symbols-outlined text-base">check</span>
              ) : (
                idx
              )}
            </span>
            <span
              className={`font-button text-button uppercase tracking-widest ${
                active ? 'text-brand-sage' : done ? 'text-brand-sage/70' : 'text-on-surface-variant'
              }`}
            >
              {label}
            </span>
            {idx < steps.length && (
              <span className="hidden sm:inline-block w-10 h-px bg-outline-variant" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span className="w-9 h-9 shrink-0 rounded-full bg-brand-sage text-white flex items-center justify-center font-body-md text-base font-bold">
        {number}
      </span>
      <div>
        <h2 className="font-h2 text-2xl text-brand-sage leading-tight">{title}</h2>
        {subtitle && (
          <p className="font-body-md text-sm text-on-surface-variant mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Field({ label, type = 'text', placeholder, autoComplete, required, helperText, value, onChange }) {
  return (
    <label className="block">
      <span className="font-body-md text-sm font-medium text-on-surface block mb-2">
        {label}
        {required && <span className="text-brand-terracotta ml-1">*</span>}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={value ?? ''}
        onChange={onChange}
        className="w-full min-h-[52px] px-4 py-3 border border-outline-variant bg-white font-body-md text-base text-on-surface focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-colors"
      />
      {helperText && (
        <span className="font-body-md text-xs text-on-surface-variant mt-1.5 block">
          {helperText}
        </span>
      )}
    </label>
  );
}

function OrderConfirmed({ name, email, total }) {
  return (
    <main className="bg-surface-container-low min-h-screen">
      <header className="bg-white border-b border-outline-variant/60">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between gap-6">
          <Link href="/" className="font-h2 text-2xl text-brand-sage">
            Heritage Garden
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-20 text-center">
        <span
          className="material-symbols-outlined text-7xl text-brand-sage mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h1 className="font-h2 text-4xl text-brand-sage mb-4">Order Confirmed</h1>
        <p className="font-body-md text-lg text-on-surface-variant mb-2">
          Thank you{name ? `, ${name}` : ''}. Your order has been placed.
        </p>
        {email && (
          <p className="font-body-md text-sm text-on-surface-variant mb-8">
            A confirmation has been sent to <span className="font-semibold text-on-surface">{email}</span>.
          </p>
        )}
        <p className="font-h3 text-2xl text-brand-sage mb-10">
          Total paid: {formatPrice(total)}
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-sage text-white font-button text-button uppercase tracking-widest px-10 py-4 hover:bg-brand-terracotta transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}

// Must be rendered inside <Elements> so useStripe / useElements work.
function CheckoutForm({ cartItems, subtotal, deliveryCost, total, paymentIntentId }) {
  const stripe = useStripe();
  const elements = useElements();
  const { clear: clearCart } = useCart();

  const [form, setForm] = useState({
    email: '', phone: '',
    firstName: '', lastName: '',
    postcode: '', addressLine1: '', addressLine2: '', city: '', county: '',
  });
  const [marketing, setMarketing] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [succeeded, setSucceeded] = useState(false);

  function field(key) {
    return {
      value: form[key],
      onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setErrorMsg('');

    // Pre-save the order as 'pending' before charging the card.
    // The webhook will flip it to 'confirmed' once Stripe fires, even if
    // the browser closes before we get back here.
    const { error: orderError } = await createOrder(
      {
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        addressLine1: form.addressLine1,
        addressLine2: form.addressLine2,
        city: form.city,
        county: form.county,
        postcode: form.postcode,
        subtotal,
        deliveryCost,
        total,
        paymentMethod: 'stripe',
        marketingOptIn: marketing,
        stripePaymentIntentId: paymentIntentId,
      },
      cartItems.map((item) => ({
        slug: item.slug,
        name: item.product.name,
        size: item.size,
        quantity: item.qty,
        unitPrice: item.isFreeGift ? 0 : priceToNumber(item.product.price),
      }))
    );

    if (orderError) {
      // Don't block payment — webhook is the safety net.
      console.error('Pre-save order failed:', orderError);
    }

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error) {
      setErrorMsg(error.message);
      setProcessing(false);
      return;
    }

    // Payment confirmed inline — webhook will update status to 'confirmed'.
    clearCart();
    setSucceeded(true);
    setProcessing(false);
  }

  if (succeeded) {
    return (
      <OrderConfirmed
        name={form.firstName}
        email={form.email}
        total={total}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <main className="bg-surface-container-low min-h-screen">
        {/* Slim secure header */}
        <header className="bg-white border-b border-outline-variant/60">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between gap-6">
            <Link href="/" className="font-h2 text-2xl text-brand-sage">
              Heritage Garden
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock
              </span>
              <span className="font-body-md text-sm font-medium">
                Secure Checkout · 256-bit SSL Encryption
              </span>
            </div>
            <a
              href="tel:08001234567"
              className="hidden md:flex items-center gap-2 text-brand-sage hover:text-brand-terracotta transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span className="font-body-md text-sm font-semibold">0800 123 4567</span>
            </a>
          </div>
        </header>

        {/* Step indicator */}
        <div className="bg-white border-b border-outline-variant/40">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6">
            <StepIndicator step={2} />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">
            {/* ─────────────────── Left: Form ─────────────────── */}
            <div className="space-y-12">

              {/* Express checkout */}
              <section>
                <p className="font-button text-button uppercase tracking-widest text-on-surface-variant text-center mb-4">
                  Express Checkout
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button type="button" className="min-h-[52px] bg-[#0070BA] text-white font-body-md font-bold hover:opacity-90 transition-opacity">
                    PayPal
                  </button>
                  <button type="button" className="min-h-[52px] bg-black text-white font-body-md font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      apple
                    </span>
                    Pay
                  </button>
                  <button type="button" className="min-h-[52px] bg-white border-2 border-on-surface text-on-surface font-body-md font-bold hover:bg-surface-container-low transition-colors">
                    G Pay
                  </button>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <span className="flex-1 h-px bg-outline-variant" />
                  <span className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant">
                    Or pay below
                  </span>
                  <span className="flex-1 h-px bg-outline-variant" />
                </div>
              </section>

              {/* 1 — Contact */}
              <section className="bg-white p-6 md:p-8 border border-outline-variant/40">
                <SectionHeader
                  number="1"
                  title="Contact Details"
                  subtitle="So we can send your order confirmation and delivery updates."
                />
                <div className="space-y-5">
                  <Field
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    helperText="We'll only use this for order updates — never spam."
                    {...field('email')}
                  />
                  <Field
                    label="Phone Number"
                    type="tel"
                    placeholder="07123 456789"
                    autoComplete="tel"
                    required
                    helperText="For delivery driver contact only."
                    {...field('phone')}
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="mt-1 w-5 h-5 accent-brand-sage cursor-pointer"
                    />
                    <span className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                      Send me Heritage Garden's seasonal catalogue and care guides. Unsubscribe in one
                      click — we never share your details.
                    </span>
                  </label>
                </div>
              </section>

              {/* 2 — Delivery address */}
              <section className="bg-white p-6 md:p-8 border border-outline-variant/40">
                <SectionHeader number="2" title="Delivery Address" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First Name" autoComplete="given-name" required {...field('firstName')} />
                  <Field label="Last Name" autoComplete="family-name" required {...field('lastName')} />
                  <div className="sm:col-span-2">
                    <Field
                      label="Postcode"
                      placeholder="e.g. SW1A 1AA"
                      autoComplete="postal-code"
                      required
                      {...field('postcode')}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Address Line 1" autoComplete="address-line1" required {...field('addressLine1')} />
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Address Line 2 (optional)" autoComplete="address-line2" {...field('addressLine2')} />
                  </div>
                  <Field label="Town / City" autoComplete="address-level2" required {...field('city')} />
                  <Field label="County" autoComplete="address-level1" {...field('county')} />
                </div>
              </section>

              {/* 3 — Payment */}
              <section className="bg-white p-6 md:p-8 border border-outline-variant/40">
                <SectionHeader
                  number="3"
                  title="Payment"
                  subtitle="Your payment details are encrypted and never stored on our servers."
                />
                <PaymentElement />
                {errorMsg && (
                  <p className="mt-4 font-body-md text-sm text-brand-terracotta">
                    {errorMsg}
                  </p>
                )}
              </section>
            </div>

            {/* ─────────────────── Right: Order summary ─────────────────── */}
            <aside className="lg:sticky lg:top-8 space-y-5">
              <div className="bg-white p-6 md:p-7 border border-outline-variant/40">
                <h3 className="font-h2 text-xl text-brand-sage mb-5 pb-4 border-b border-outline-variant/40">
                  Your Order
                </h3>

                <div className="space-y-5 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.slug} className="flex gap-4">
                      <div className="relative w-20 h-20 shrink-0 overflow-hidden border border-outline-variant/40 bg-surface-container">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-sage text-white text-[11px] font-bold flex items-center justify-center">
                          {item.qty}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body-md text-sm font-semibold text-brand-sage leading-tight">
                          {item.product.name}
                        </p>
                        {item.size && (
                          <p className="font-body-md text-xs text-on-surface-variant mt-1">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="font-body-md text-sm font-bold text-brand-sage mt-2">
                          {formatPrice(priceToNumber(item.product.price) * item.qty)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pb-5 mb-5 border-b border-outline-variant/40">
                  <label className="block">
                    <span className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
                      Promo Code
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 min-h-[44px] px-3 border border-outline-variant bg-white font-body-md text-sm focus:outline-none focus:border-brand-sage"
                      />
                      <button
                        type="button"
                        className="px-4 min-h-[44px] border border-brand-sage text-brand-sage font-button text-button uppercase text-xs hover:bg-brand-sage hover:text-white transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </label>
                </div>

                <dl className="space-y-2.5 text-base mb-5">
                  <div className="flex justify-between font-body-md text-on-surface">
                    <dt>Subtotal</dt>
                    <dd>{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between font-body-md text-on-surface">
                    <dt>Delivery</dt>
                    <dd>{deliveryCost === 0 ? 'FREE' : formatPrice(deliveryCost)}</dd>
                  </div>
                  <div className="flex justify-between font-body-md text-on-surface-variant text-sm">
                    <dt>VAT (20%, included)</dt>
                    <dd>{formatPrice(total / 6)}</dd>
                  </div>
                </dl>

                <div className="flex justify-between items-baseline pt-5 border-t border-outline-variant/40">
                  <span className="font-h3 text-lg text-brand-sage">Total</span>
                  <div className="text-right">
                    <span className="font-h2 text-3xl text-brand-sage block leading-none">
                      {formatPrice(total)}
                    </span>
                    <span className="font-body-md text-xs text-on-surface-variant mt-1 block">
                      inc. VAT and delivery
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing || !stripe}
                  className="mt-6 w-full min-h-[60px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {processing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing…
                    </>
                  ) : (
                    <>
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        lock
                      </span>
                      Place Secure Order — {formatPrice(total)}
                    </>
                  )}
                </button>

                <p className="font-body-md text-xs text-on-surface-variant text-center mt-3 leading-relaxed">
                  By placing this order you agree to our{' '}
                  <Link href="#" className="text-brand-sage underline">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-brand-sage underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Reassurance card */}
              <div className="bg-white p-5 border border-outline-variant/40 space-y-4">
                {[
                  {
                    icon: 'verified',
                    title: '5-Year Heritage Guarantee',
                    text: 'Every product covered, registered free at checkout.',
                  },
                  {
                    icon: 'card_giftcard',
                    title: '30-Day Free Returns',
                    text: 'Changed your mind? We collect from your home, no charge.',
                  },
                  {
                    icon: 'shield_lock',
                    title: 'PCI DSS Secure Payments',
                    text: 'Processed by Stripe. We never see your card details.',
                  },
                  {
                    icon: 'support_agent',
                    title: 'UK Customer Support',
                    text: 'Speak to a real person, Mon–Sat, 8am–8pm.',
                  },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-sage text-2xl shrink-0">
                      {b.icon}
                    </span>
                    <div>
                      <p className="font-body-md text-sm font-semibold text-brand-sage leading-tight">
                        {b.title}
                      </p>
                      <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trustpilot mini */}
              <a
                href="https://uk.trustpilot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-white border border-outline-variant/60 hover:border-[#00B67A] transition-colors"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 flex items-center justify-center"
                      style={{ backgroundColor: '#00B67A' }}
                    >
                      <span
                        className="material-symbols-outlined text-white text-base leading-none"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </span>
                  ))}
                </div>
                <span className="font-body-md text-xs text-on-surface-variant">
                  <span className="font-semibold text-on-surface">4.8</span> · 2,341 reviews
                </span>
              </a>
            </aside>
          </div>

          {/* Reassurance footer band */}
          <section className="mt-16 md:mt-20 pt-10 border-t border-outline-variant/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <span
                  className="material-symbols-outlined text-brand-sage text-3xl mb-3 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  call
                </span>
                <h4 className="font-h3 text-lg text-brand-sage mb-2">Need a Hand Ordering?</h4>
                <p className="font-body-md text-sm text-on-surface-variant mb-2">
                  Speak to our UK team — happy to take your order over the phone.
                </p>
                <a
                  href="tel:08001234567"
                  className="font-body-md text-base font-bold text-brand-sage hover:text-brand-terracotta transition-colors"
                >
                  0800 123 4567
                </a>
                <p className="font-body-md text-xs text-on-surface-variant mt-1">
                  Mon–Sat, 8am–8pm · Calls are free
                </p>
              </div>
              <div>
                <span
                  className="material-symbols-outlined text-brand-sage text-3xl mb-3 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  home_pin
                </span>
                <h4 className="font-h3 text-lg text-brand-sage mb-2">A Real British Company</h4>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Heritage Garden Ltd · Reg. No. 09384726
                  <br />
                  The Old Forge, Cotswold Way, Cheltenham GL52 6PN
                </p>
              </div>
              <div>
                <span
                  className="material-symbols-outlined text-brand-sage text-3xl mb-3 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield_lock
                </span>
                <h4 className="font-h3 text-lg text-brand-sage mb-2">Your Data is Safe</h4>
                <p className="font-body-md text-sm text-on-surface-variant">
                  256-bit SSL encryption throughout. PCI DSS compliant. We're a registered data
                  controller — ICO Reg. ZA487291.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-outline-variant/40 flex flex-wrap items-center justify-center gap-3">
              <span className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant mr-2">
                We accept
              </span>
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Klarna', 'Apple Pay', 'Google Pay'].map(
                (p) => (
                  <span
                    key={p}
                    className="text-[11px] uppercase tracking-wide font-bold text-on-surface-variant border border-outline-variant/60 px-3 py-1.5 bg-white"
                  >
                    {p}
                  </span>
                )
              )}
            </div>
          </section>
        </div>
      </main>
    </form>
  );
}

function CheckoutInner() {
  const searchParams = useSearchParams();
  const itemSlug = searchParams.get('item');
  const { items: basketItems, subtotal: cartSubtotal } = useCart();

  const cartItems = useMemo(() => {
    if (itemSlug) {
      const product = getProductBySlug(itemSlug);
      if (!product) return [];
      return [{ slug: itemSlug, qty: 1, size: product.sizes?.[0] ?? null, product }];
    }
    return basketItems;
  }, [itemSlug, basketItems]);

  // Use CartContext's subtotal (excludes the auto-added free gift) so
  // the PaymentIntent amount is never inflated by a £0-cost item.
  const subtotal = itemSlug
    ? priceToNumber(cartItems[0]?.product?.price ?? '0') * (cartItems[0]?.qty ?? 1)
    : cartSubtotal;
  const deliveryCost = subtotal >= 100 ? 0 : 4.95;
  const total = subtotal + deliveryCost;

  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState('');

  useEffect(() => {
    const amountPence = Math.round(total * 100);
    if (amountPence < 30) return;

    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amountPence }),
    })
      .then((r) => r.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
      })
      .catch(console.error);
  }, [total]);

  if (!clientSecret) {
    return (
      <main className="bg-surface-container-low min-h-screen flex items-center justify-center">
        <span className="w-10 h-10 border-[3px] border-brand-sage border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret, appearance: STRIPE_APPEARANCE }}
    >
      <CheckoutForm
        cartItems={cartItems}
        subtotal={subtotal}
        deliveryCost={deliveryCost}
        total={total}
        paymentIntentId={paymentIntentId}
      />
    </Elements>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutInner />
    </Suspense>
  );
}
