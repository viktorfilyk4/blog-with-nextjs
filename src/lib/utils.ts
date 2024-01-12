export function getCurrentTime(): string {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getUTCSeconds()

  const q = (n: number) => (n.toString().length < 2 ? `0${n}` : n)

  return `Ukraine: ${q(hours)}:${q(minutes)}:${q(seconds)} (GMT+2)`
}

export function removeNullsFromArray<T>(arr: Array<T>) {
  return arr.filter((value) => value !== null)
}
