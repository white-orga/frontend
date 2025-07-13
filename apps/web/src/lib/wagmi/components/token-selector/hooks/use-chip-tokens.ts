import type { EvmChainId } from 'citea/chain'
import { EVM_DEFAULT_BASES } from 'citea/config'
// import { usePinnedTokens } from '@sushiswap/hooks'
import { useMemo } from 'react'

interface UseChipTokens {
  chainId: EvmChainId
  includeNative?: boolean
  showPinnedTokens?: boolean
}

// TODO: Add pinned tokens

export function useChipTokens({
  chainId,
  includeNative = true,
  // showPinnedTokens = true,
}: UseChipTokens) {
  const defaultBases = EVM_DEFAULT_BASES[chainId]

  // const {} = usePinnedTokens()

  return useMemo(() => {
    return defaultBases.flatMap((base) => {
      if (base.isNative && !includeNative) return []

      return {
        default: true,
        token: base,
      }
    })
  }, [includeNative, defaultBases])
}
