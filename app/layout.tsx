import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from "next/font/google"
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';

export const metadata: Metadata = {
  title: 'Animawesome',
  description: 'An animal sharing website',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <ToasterProvider />
          <LoginModal /> */}
          <RegisterModal />
          {/* <SearchModal />
          <RentModal /> */}
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
