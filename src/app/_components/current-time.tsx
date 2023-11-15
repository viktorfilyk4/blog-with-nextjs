"use client"

import { useCurrentTime } from "../_lib/hooks"

export default function CurrentTime() {
  const [currentTime] = useCurrentTime()

  return (
    <div suppressHydrationWarning className='dark:text-white'>
      {currentTime}
    </div>
  )
}
