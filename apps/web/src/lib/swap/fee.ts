import type { Amount, Type } from 'citea/currency'
import { type Fraction, Percent } from 'citea/math'
import { isLsd, isStable, isWrapOrUnwrap } from 'citea/router'

export const getFeeString = ({
  fromToken,
  toToken,
  tokenOutPrice,
  minAmountOut,
}: {
  fromToken: Type
  toToken: Type
  tokenOutPrice: Fraction | undefined
  minAmountOut: Amount<Type>
}) => {
  return !isWrapOrUnwrap({ fromToken, toToken }) &&
    !isStable({ fromToken, toToken }) &&
    !isLsd({ fromToken, toToken })
    ? `${tokenOutPrice ? '$' : ''}${minAmountOut
        .multiply(new Percent(25, 10000))
        .multiply(tokenOutPrice ? tokenOutPrice.asFraction : 1)
        .toSignificant(4)}${!tokenOutPrice ? ` ${toToken.symbol}` : ''}`
    : '$0'
}
