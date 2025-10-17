# PromptGallery 🎨

A beautiful, responsive web application for discovering and sharing AI image generation prompts. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## ✨ Features

- **Responsive Gallery**: Beautiful grid layout showcasing AI-generated images with prompts
- **Search & Filter**: Find prompts by keywords, tags, or categories
- **Copy & Share**: Easy prompt copying and sharing functionality
- **Admin Panel**: Simple interface for managing prompts
- **Modern UI**: Clean design with yellow accent colors and smooth animations

## 🚀 Live Demo

Visit: [Your Vercel URL will be here]

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/itskiranbabu/promptgallery.git
cd promptgallery
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Supabase credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

## 🗄️ Database Setup

Run this SQL in your Supabase SQL editor:

```sql
-- Create prompts table
CREATE TABLE prompts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  prompt_text TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  creator_name VARCHAR(100) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on prompts" ON prompts
  FOR SELECT USING (true);
```

## 📱 Usage

- Browse the gallery of AI prompts
- Use search to find specific prompts
- Filter by categories
- Click copy button to copy prompts
- Access `/admin` for prompt management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for your own purposes!

---

Built with ❤️ by [Your Name]