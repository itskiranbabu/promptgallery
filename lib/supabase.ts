import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Prompt = {
  id: string
  title: string
  prompt_text: string
  image_url: string
  category: string
  creator_name: string
  tags: string[]
  created_at: string
}