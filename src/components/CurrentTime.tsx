'use client'

import { useCurrentTime } from '@/lib/hooks'

export default function CurrentTime() {
  const [currentTime] = useCurrentTime()

  return (
    <div suppressHydrationWarning className='text-right dark:text-white'>
      {currentTime}
    </div>
  )
}
