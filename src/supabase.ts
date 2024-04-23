import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://rbjmvvooqxcxrgedgkpc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiam12dm9vcXhjeHJnZWRna3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1OTUxNzMsImV4cCI6MjAyOTE3MTE3M30.YLWKaB1nfMnQhDAPsXTho-dSGNQ3iohWmUiMFDvlg_Q'
export const supabase = createClient(supabaseUrl, supabaseKey)