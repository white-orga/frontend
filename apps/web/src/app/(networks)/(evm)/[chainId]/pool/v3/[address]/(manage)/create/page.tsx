import type { EvmChainId } from 'citea'
import { isSushiSwapV3ChainId } from 'citea/config'
import { notFound } from 'next/navigation'
import React from 'react'
import { ConcentratedLiquidityProvider } from 'src/ui/pool/ConcentratedLiquidityProvider'
import { NewPosition } from 'src/ui/pool/NewPosition'
import { isAddress } from 'viem'

export default async function PositionsCreatePage(props: {
  params: Promise<{ address: string; chainId: string }>
}) {
  const params = await props.params
  const { chainId: _chainId, address } = params
  const chainId = +_chainId as EvmChainId

  if (
    !isSushiSwapV3ChainId(chainId) ||
    !isAddress(address, { strict: false })
  ) {
    return notFound()
  }

  return (
    <ConcentratedLiquidityProvider>
      <NewPosition address={address} chainId={chainId} />
    </ConcentratedLiquidityProvider>
  )
}
