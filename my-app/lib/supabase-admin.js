import { createClient } from '@supabase/supabase-js';

// Service-role client — bypasses RLS. Only ever import this in server-side
// code (API routes, server components). Never expose to the browser.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
