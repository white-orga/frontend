import { LinkInternal } from '@sushiswap/ui'
import { type ChainId, ChainKey } from 'citea/chain'
import { PathnameButton } from 'src/ui/pathname-button'

export function NavigationItems({ chainId }: { chainId: ChainId }) {
  return (
    <>
      <LinkInternal
        shallow={true}
        scroll={false}
        href={`/${ChainKey[chainId]}/explore/tokens`}
      >
        <PathnameButton
          id="tokens"
          pathname={`/${ChainKey[chainId]}/explore/tokens`}
          asChild
          size="sm"
        >
          Tokens
        </PathnameButton>
      </LinkInternal>
      <LinkInternal
        shallow={true}
        scroll={false}
        href={`/${ChainKey[chainId]}/explore/pools`}
      >
        <PathnameButton
          id="pools"
          pathname={`/${ChainKey[chainId]}/explore/pools`}
          asChild
          size="sm"
        >
          Pools
        </PathnameButton>
      </LinkInternal>
    </>
  )
}
