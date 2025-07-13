import { Dots } from '@sushiswap/ui'
import { EvmChain } from 'citea/chain'
import type { FC } from 'react'

import type { ResolvedNotification } from '../../types'
import { ToastContent } from './toast-content'

interface ToastPending extends ResolvedNotification {
  onDismiss(): void
}

export const ToastPending: FC<ToastPending> = ({
  type: _type,
  href,
  chainId,
  txHash,
  onDismiss: _onDismiss,
  summary,
}) => {
  const txUrl = href
    ? href
    : txHash
      ? EvmChain.from(chainId)?.getTxUrl(txHash)
      : ''
  return (
    <>
      <ToastContent href={txUrl} summary={<Dots>{summary}</Dots>} />
    </>
  )
}
