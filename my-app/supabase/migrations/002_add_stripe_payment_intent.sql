-- Run this in the Supabase SQL editor after 001_initial_schema.sql

alter table orders add column stripe_payment_intent_id text unique;

create index idx_orders_stripe_pi on orders(stripe_payment_intent_id);
