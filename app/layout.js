import './globals.css'

export const metadata = {
  title: 'Dipesh Rawool | Full Stack Developer & AI Engineer',
  description: 'Portfolio of Dipesh Rawool — Full Stack Developer specializing in React, Next.js, Python, and AI/RAG applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Python', 'AI Engineer', 'Navi Mumbai'],
  authors: [{ name: 'Dipesh Rawool' }],
  openGraph: {
    title: 'Dipesh Rawool | Full Stack Developer',
    description: 'Full Stack Developer & AI Engineer',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-secondary text-textPrimary antialiased">
        {children}
      </body>
    </html>
  )
}