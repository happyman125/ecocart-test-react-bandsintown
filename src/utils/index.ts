export const numberFormatter = (number: number): string => {
  return new Intl.NumberFormat('en-US').format(number)
}
