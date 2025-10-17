import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PromptGallery - AI Image Prompts Collection',
  description: 'Discover and share amazing AI image generation prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}