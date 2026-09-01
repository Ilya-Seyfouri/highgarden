import Stripe from 'stripe';

// Built lazily: at build time `next build` imports this module to collect
// route data, and the Stripe constructor throws if the key isn't set yet.
let stripe;
function getStripe() {
  stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY);
  return stripe;
}

export async function POST(request) {
  const { amountPence } = await request.json();

  if (!amountPence || amountPence < 30) {
    return Response.json({ error: 'Invalid amount' }, { status: 400 });
  }

  const paymentIntent = await getStripe().paymentIntents.create({
    amount: amountPence,
    currency: 'gbp',
    automatic_payment_methods: { enabled: true },
  });

  return Response.json({
    clientSecret:    paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
  });
}
