export function getCurrentTime(): string {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getUTCSeconds()
  const day = now.getDay()
  return `Ukraine - Day ${day} - ${hours}:${minutes}:${seconds} GMT+2`
}
