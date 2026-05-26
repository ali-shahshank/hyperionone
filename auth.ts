import 'server-only';
import { createClient } from '@/utils/supabase/server';

export async function auth() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}
