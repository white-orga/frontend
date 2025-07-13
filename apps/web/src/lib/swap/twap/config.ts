import { type Config, Configs } from '@orbs-network/twap-sdk'
import { ChainId } from 'citea/chain'
import type { TwapSupportedChainId } from 'src/config'

export const TWAP_CONFIG: Record<TwapSupportedChainId, Config> = {
  [ChainId.ETHEREUM]: Configs.SushiEth,
  [ChainId.ARBITRUM]: Configs.SushiArb,
  [ChainId.BASE]: Configs.SushiBase,
  [ChainId.KATANA]: {
    ...Configs.SushiKatana,
    minChunkSizeUsd: 5,
  },
}
