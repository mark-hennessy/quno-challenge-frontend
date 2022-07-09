export function getAmountWithCounterWord(
  amount: number,
  singularCounterWord: string
): string {
  return `${amount} ${singularCounterWord}${amount === 1 ? "" : "s"}`;
}
