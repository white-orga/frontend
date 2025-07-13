'use client'

import type { EvmChainId } from 'citea/chain'
import type { Amount, Type } from 'citea/currency'
import { ZERO } from 'citea/math'
import { useMemo } from 'react'
import { usePrices } from '~evm/_common/ui/price-provider/price-provider/use-prices'

interface Params {
  chainId: EvmChainId
  amounts: (Amount<Type> | undefined)[] | null | undefined
}

type UseTokenAmountDollarValues = (params: Params) => number[]

export const useTokenAmountDollarValues: UseTokenAmountDollarValues = ({
  chainId,
  amounts,
}) => {
  const { data: prices } = usePrices({ chainId })

  return useMemo(() => {
    if (!amounts) return []

    return amounts.map((amount) => {
      if (
        !amount?.greaterThan(ZERO) ||
        !prices?.has(amount.currency.wrapped.address)
      )
        return 0
      const price = Number(
        Number(amount.toExact()) *
          Number(prices.get(amount.currency.wrapped.address)!.toFixed(10)),
      )
      if (Number.isNaN(price) || price < 0.000001) {
        return 0
      }

      return price
    })
  }, [amounts, prices])
}
