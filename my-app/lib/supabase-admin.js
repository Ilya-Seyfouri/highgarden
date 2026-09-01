import { createClient } from '@supabase/supabase-js';

// Service-role client — bypasses RLS. Only ever import this in server-side
// code (API routes, server components). Never expose to the browser.
//
// Built lazily: at build time `next build` imports the routes that use this
// to collect route data, and createClient throws if the env vars aren't set.
let client;
export function getSupabaseAdmin() {
  client ??= createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
  return client;
}
