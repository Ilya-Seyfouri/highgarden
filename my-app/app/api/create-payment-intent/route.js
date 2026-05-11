import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { amountPence } = await request.json();

  if (!amountPence || amountPence < 30) {
    return Response.json({ error: 'Invalid amount' }, { status: 400 });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountPence,
    currency: 'gbp',
    automatic_payment_methods: { enabled: true },
  });

  return Response.json({
    clientSecret:    paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
  });
}
