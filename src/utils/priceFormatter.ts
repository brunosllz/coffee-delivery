export function priceFormatter(price: number) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'narrowSymbol',
  })
    .format(price / 100)
    .replace('R$', '')

  return priceFormatted
}
