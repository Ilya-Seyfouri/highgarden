-- ============================================================
-- 001_initial_schema.sql
-- Run this in the Supabase SQL editor for your project.
-- ============================================================

-- ── Products ────────────────────────────────────────────────
-- Maps our internal slugs to AliExpress product IDs.
-- Fill aliexpress_product_id once you have the mappings.
create table products (
  id                    uuid primary key default gen_random_uuid(),
  slug                  text not null unique,
  name                  text not null,
  category              text not null,
  aliexpress_product_id text,                        -- fill in later
  created_at            timestamptz not null default now()
);

-- ── Orders ──────────────────────────────────────────────────
-- One row per guest purchase. Customer info lives here since
-- there are no user accounts (guest checkout only).
create table orders (
  id               uuid primary key default gen_random_uuid(),

  -- Customer contact
  full_name        text not null,
  email            text not null,
  phone            text not null,

  -- Delivery address
  address_line_1   text not null,
  address_line_2   text,
  city             text not null,
  county           text,
  postcode         text not null,
  country          text not null default 'GB',

  -- Financials (stored in £ to two decimal places)
  subtotal         numeric(10,2) not null,
  delivery_cost    numeric(10,2) not null default 0,
  total            numeric(10,2) not null,

  -- Order meta
  payment_method   text,
  promo_code       text,
  marketing_opt_in boolean not null default false,
  status           text not null default 'pending'
                     check (status in (
                       'pending','confirmed','processing',
                       'shipped','delivered','cancelled','refunded'
                     )),

  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- Keep updated_at current automatically
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger orders_updated_at
  before update on orders
  for each row execute procedure set_updated_at();

-- ── Order Items ─────────────────────────────────────────────
-- Line items linking an order back to a product.
create table order_items (
  id               uuid primary key default gen_random_uuid(),
  order_id         uuid not null references orders(id) on delete cascade,
  product_id       uuid not null references products(id),

  size             text,                            -- e.g. "8 Seater", "3m"
  quantity         integer not null check (quantity > 0),
  unit_price       numeric(10,2) not null,          -- price at time of purchase
  total_price      numeric(10,2) not null,

  created_at       timestamptz not null default now()
);

-- ── Row Level Security ───────────────────────────────────────
alter table products    enable row level security;
alter table orders      enable row level security;
alter table order_items enable row level security;

-- Products: anyone can read, nobody can write via client
create policy "products_public_read"
  on products for select using (true);

-- Orders: anyone can insert (guest checkout), no client reads
create policy "orders_insert_anon"
  on orders for insert with check (true);

-- Order items: anyone can insert alongside an order, no client reads
create policy "order_items_insert_anon"
  on order_items for insert with check (true);

-- ── Indexes ──────────────────────────────────────────────────
create index idx_orders_email      on orders(email);
create index idx_orders_status     on orders(status);
create index idx_order_items_order on order_items(order_id);

-- ── Product Seed ─────────────────────────────────────────────
-- All 30 products pre-loaded. Set aliexpress_product_id when ready.
insert into products (slug, name, category) values
  -- Outdoor Furniture
  ('aspen-teak-dining-set',     'Aspen Teak Dining Set',      'Outdoor Furniture'),
  ('hartwood-extending-set',    'Hartwood Extending Set',     'Outdoor Furniture'),
  ('brompton-6-seater',         'Brompton 6-Seater',          'Outdoor Furniture'),
  ('cotswold-round-bistro',     'Cotswold Round Bistro',      'Outdoor Furniture'),
  ('marlow-4-seater-cafe-set',  'Marlow 4-Seater Café Set',   'Outdoor Furniture'),
  ('devon-folding-teak-set',    'Devon Folding Teak Set',     'Outdoor Furniture'),
  -- Garden Parasols
  ('riviera-cantilever-3m',     'Riviera Cantilever 3m',      'Garden Parasols'),
  ('heritage-classic-parasol',  'Heritage Classic Parasol',   'Garden Parasols'),
  ('bali-sun-shade-4m',         'Bali Sun Shade 4m',          'Garden Parasols'),
  ('tuscany-market-umbrella',   'Tuscany Market Umbrella',    'Garden Parasols'),
  ('clifton-led-parasol',       'Clifton LED Parasol',        'Garden Parasols'),
  ('coastal-tilt-umbrella',     'Coastal Tilt Umbrella',      'Garden Parasols'),
  -- Gazebos
  ('manor-cedar-gazebo',        'Manor Cedar Gazebo',         'Gazebos'),
  ('heritage-octagonal-gazebo', 'Heritage Octagonal Gazebo',  'Gazebos'),
  ('pavilion-steel-pergola',    'Pavilion Steel Pergola',     'Gazebos'),
  ('cotswold-garden-arch',      'Cotswold Garden Arch',       'Gazebos'),
  ('belgravia-pergola',         'Belgravia Pergola',          'Gazebos'),
  ('pemberton-arbour',          'Pemberton Arbour',           'Gazebos'),
  -- Outdoor Lights
  ('festoon-string-lights-10m', 'Festoon String Lights 10m',  'Outdoor Lights'),
  ('edison-bulb-string-lights', 'Edison Bulb String Lights',  'Outdoor Lights'),
  ('solar-lantern-set',         'Solar Lantern Set',          'Outdoor Lights'),
  ('heritage-path-lights',      'Heritage Path Lights',       'Outdoor Lights'),
  ('copper-garden-flares',      'Copper Garden Flares',       'Outdoor Lights'),
  ('greenwich-bollard-light',   'Greenwich Bollard Light',    'Outdoor Lights'),
  -- Accessories
  ('linen-scatter-cushions',    'Linen Scatter Cushions',     'Accessories'),
  ('heritage-outdoor-rug',      'Heritage Outdoor Rug',       'Accessories'),
  ('cotswold-planter-pair',     'Cotswold Planter Pair',      'Accessories'),
  ('teak-furniture-oil',        'Teak Furniture Oil',         'Accessories'),
  ('garden-wind-chime',         'Garden Wind Chime',          'Accessories'),
  ('garden-candle-lantern-set', 'Garden Candle Lantern Set',  'Accessories');
