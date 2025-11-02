'use client'

import { Navigation, SushiNavigationDropdown, classNames } from '@sushiswap/ui'
import { SushiIcon } from '@sushiswap/ui/icons/SushiIcon'
import { SushiWithTextIcon } from '@sushiswap/ui/icons/SushiWithTextIcon'
import type { ChainId, EvmChainId } from 'citea/chain'
import React, { type FC } from 'react'
import { type NonStandardChainId, SUPPORTED_NETWORKS } from 'src/config'
import { WagmiHeaderComponents } from 'src/lib/wagmi/components/wagmi-header-components'
import { useChainId } from 'wagmi'
import { headerElements } from '../_common/header-elements'

interface HeaderProps {
  chainId?: ChainId
  supportedNetworks?: readonly (EvmChainId | NonStandardChainId)[]
}

export const Header: FC<HeaderProps> = ({
  chainId: _chainId,
  supportedNetworks,
}) => {
  const connectedChainId = useChainId()
  const chainId = _chainId ?? connectedChainId

  return (
    <div className="w-full h-[56px] z-20">
      <div className="fixed w-full flex z-20">
        <div
          className={classNames(
            'hidden lg:flex justify-between items-center px-1 h-14 flex-shrink-0 bg-gray-100 dark:bg-slate-900 border-gray-200 dark:border-slate-800 border-b',
          )}
        >
          {/* <SushiNavigationDropdown className="!px-2"> */}
          {/* <SushiWithTextIcon width={120} /> */}
          <img src="/navbar.png" alt="Citeazens" className="w-[180px] h-auto" />
          {/* </SushiNavigationDropdown> */}
        </div>
        <div className="flex lg:hidden justify-between items-center pl-4 bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
          {/* <SushiNavigationDropdown> */}
          {/* <SushiIcon width={24} height={24} /> */}
          <img
            src="/favicon-32x32.png"
            alt="Citeazens"
            className="w-[32px] h-auto"
          />
          {/* </SushiNavigationDropdown> */}
        </div>
        <Navigation
          className="!pl-0 lg:!pl-4 !z-[unset]"
          hideSushiDropdown
          leftElements={headerElements({ chainId })}
          rightElement={
            <WagmiHeaderComponents
              networks={SUPPORTED_NETWORKS}
              selectedNetwork={chainId as EvmChainId}
              supportedNetworks={supportedNetworks}
            />
          }
        />
      </div>
    </div>
  )
}
