import { Header } from '~tron/header'
import { Providers } from './providers'

export const metadata = {
  title: 'Citeazens on Tron',
  description:
    'Citeazens is a community-driven decentralized exchange (DEX) for traders and liquidity providers.',
}

export default function SwapLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <main className="lg:p-4 mt-16 mb-[86px] animate-slide">{children}</main>
    </Providers>
  )
}
