import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kazuki's Profile",
  description: "Links to Kazuki's Projects and Socials",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
