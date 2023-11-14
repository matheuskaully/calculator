import type { Metadata } from 'next'
import { Space_Mono as SpaceMono } from 'next/font/google'
import './globals.css'

const spacemono = SpaceMono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Calculadora | Matheus Kaúlly',
  description:
    'Calculadora criada utilizando Next.js, Tailwind CSS e sólida lógica de programação. A combinação da eficiência do Next.js, a estilização simplificada do Tailwind CSS e a lógica cuidadosa por trás das operações transformam esta calculadora em uma ferramenta funcional e elegante, exemplificando a harmonia entre tecnologia e design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${spacemono.className} text-gray-100 bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
