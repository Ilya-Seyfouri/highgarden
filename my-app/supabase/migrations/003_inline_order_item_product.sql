-- ============================================================
-- 003_inline_order_item_product.sql
--
-- Stop joining order_items -> products. The catalog lives in
-- lib/products.js; the DB doesn't need to pre-seed every slug
-- just to satisfy a foreign key. Inline the product slug and
-- name directly on each order item so an order saves cleanly
-- regardless of what's in the products table.
-- ============================================================

alter table order_items
  drop constraint if exists order_items_product_id_fkey,
  alter column product_id drop not null,
  add column if not exists product_slug text,
  add column if not exists product_name text;

-- Backfill existing rows (no-op if none).
update order_items oi
set product_slug = p.slug,
    product_name = p.name
from products p
where oi.product_id = p.id
  and (oi.product_slug is null or oi.product_name is null);

alter table order_items
  alter column product_slug set not null,
  alter column product_name set not null;
