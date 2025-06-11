import { createBrowserClient } from '@supabase/ssr';

export function getUserId() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return supabase.auth.getUser().then(({ data }) => data.user?.id || null);
}
