export const stateInputMask = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/[0-9]/g, '')
    .replace(/(\w{2})(\w+?)/, '$1')
    .toUpperCase()
}
