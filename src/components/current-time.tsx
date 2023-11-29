"use client"

import { useCurrentTime } from "../lib/hooks"

export default function CurrentTime() {
  const [currentTime] = useCurrentTime()

  return (
    <div suppressHydrationWarning className='dark:text-white text-right'>
      {currentTime}
    </div>
  )
}
