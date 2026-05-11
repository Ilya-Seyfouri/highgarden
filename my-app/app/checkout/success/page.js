'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { formatPrice } from '@/lib/products';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function SuccessInner() {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get('payment_intent_client_secret');

  const [status, setStatus] = useState('loading'); // loading | succeeded | failed
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    if (!clientSecret) {
      setStatus('failed');
      return;
    }

    stripePromise.then((stripe) => {
      if (!stripe) return;
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        if (paymentIntent?.status === 'succeeded') {
          setAmount(paymentIntent.amount / 100);
          setStatus('succeeded');
        } else {
          setStatus('failed');
        }
      });
    });
  }, [clientSecret]);

  return (
    <main className="bg-surface-container-low min-h-screen">
      <header className="bg-white border-b border-outline-variant/60">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5">
          <Link href="/" className="font-h2 text-2xl text-brand-sage">
            Heritage Garden
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-20 text-center">
        {status === 'loading' && (
          <span className="w-10 h-10 border-[3px] border-brand-sage border-t-transparent rounded-full animate-spin block mx-auto" />
        )}

        {status === 'succeeded' && (
          <>
            <span
              className="material-symbols-outlined text-7xl text-brand-sage mb-6 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <h1 className="font-h2 text-4xl text-brand-sage mb-4">Order Confirmed</h1>
            <p className="font-body-md text-lg text-on-surface-variant mb-8">
              Your payment was successful. A confirmation email is on its way.
            </p>
            {amount !== null && (
              <p className="font-h3 text-2xl text-brand-sage mb-10">
                Total paid: {formatPrice(amount)}
              </p>
            )}
            <Link
              href="/"
              className="inline-block bg-brand-sage text-white font-button text-button uppercase tracking-widest px-10 py-4 hover:bg-brand-terracotta transition-colors"
            >
              Continue Shopping
            </Link>
          </>
        )}

        {status === 'failed' && (
          <>
            <span className="material-symbols-outlined text-7xl text-brand-terracotta mb-6 block">
              error
            </span>
            <h1 className="font-h2 text-4xl text-brand-sage mb-4">Payment Unsuccessful</h1>
            <p className="font-body-md text-lg text-on-surface-variant mb-8">
              Something went wrong with your payment. No charge has been made.
            </p>
            <Link
              href="/checkout"
              className="inline-block bg-brand-sage text-white font-button text-button uppercase tracking-widest px-10 py-4 hover:bg-brand-terracotta transition-colors"
            >
              Try Again
            </Link>
          </>
        )}
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessInner />
    </Suspense>
  );
}
