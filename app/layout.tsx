import { Toaster } from "@/components/ui/sonner"
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex w-screen h-screen select-none'>
          <main className="flex w-full h-full">{children}</main>
          <Toaster position="bottom-right"/>
      </body>
    </html>
  )
}
