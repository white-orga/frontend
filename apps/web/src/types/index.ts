import type {
  SushiSwapV2ChainId,
  SushiSwapV3ChainId,
  TridentChainId,
} from 'citea/config'

export type SwapChainId =
  | TridentChainId
  | SushiSwapV2ChainId
  | SushiSwapV3ChainId
