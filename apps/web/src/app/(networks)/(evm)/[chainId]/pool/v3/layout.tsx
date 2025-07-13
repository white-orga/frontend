import type { EvmChainId } from 'citea/chain'
import { isSushiSwapV3ChainId } from 'citea/config'
import { notFound } from 'next/navigation'

export default async function Layout(props: {
  children: React.ReactNode
  params: Promise<{ chainId: string }>
}) {
  const params = await props.params

  const { children } = props

  const chainId = +params.chainId as EvmChainId
  if (!isSushiSwapV3ChainId(chainId)) {
    return notFound()
  }

  return <>{children}</>
}
