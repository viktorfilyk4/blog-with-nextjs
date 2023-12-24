export function getCurrentTime(): string {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getUTCSeconds()

  let modifiedSeconds

  if (seconds.toString().length < 2) modifiedSeconds = `0${seconds}`
  else modifiedSeconds = seconds

  return `Ukraine: ${hours}:${minutes}:${modifiedSeconds} (GMT+2)`
}

export function removeNullsFromArray<T>(arr: Array<T>) {
  return arr.filter((value) => value !== null)
}
