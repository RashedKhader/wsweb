import type { Metadata } from 'next'
import { Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Share_Tech_Mono({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Waha Space',
  description: 'Waha Space Satllite Subsystem Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030509] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
