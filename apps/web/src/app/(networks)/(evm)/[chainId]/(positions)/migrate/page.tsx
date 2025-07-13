import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import type { EvmChainId } from 'citea'
import { isSushiSwapV2ChainId } from 'citea/config'
import { MigrateTabContent } from 'src/ui/pool/MigrateTabContent'

export const metadata: Metadata = {
  title: 'Migrate',
  description: 'A SushiSwap V2 to V3 migration tool.',
}

export default async function MigratePage(props: {
  params: Promise<{ chainId: string }>
}) {
  const params = await props.params
  const chainId = +params.chainId as EvmChainId

  if (!isSushiSwapV2ChainId(chainId)) {
    return notFound()
  }

  return <MigrateTabContent chainId={chainId} />
}
