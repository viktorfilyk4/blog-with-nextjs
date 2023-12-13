'use client'

import { useCurrentTime } from '@/lib/hooks'

export default function CurrentTime() {
  const [currentTime] = useCurrentTime()

  return (
    <div suppressHydrationWarning className='text-center text-gray-400'>
      {currentTime}
    </div>
  )
}
