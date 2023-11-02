import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for cool data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
  {children}
  </>
  )
}
