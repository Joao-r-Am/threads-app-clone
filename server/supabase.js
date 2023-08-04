import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(
  'https://milzmatkbdvzkzehgrch.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbHptYXRrYmR2emt6ZWhncmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwMjg4ODcsImV4cCI6MjAwNjYwNDg4N30.7LNdRuhPS1MUQsc4vTYPe5W_06Nk0BzEjXoDv7RKD6E',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: true,
    },
    db: {
      schema: 'public',
    },
  }
)
