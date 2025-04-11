import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vthkgebucvwdygrgthfa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0aGtnZWJ1Y3Z3ZHlncmd0aGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDEwODAsImV4cCI6MjA1OTY3NzA4MH0.P7ts7s1_6hEdNHkrmcectZL543429OY2gIQIEcBU3tc';
export const supabase = createClient(supabaseUrl, supabaseKey);
