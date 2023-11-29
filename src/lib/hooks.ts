import { useState, useEffect } from "react"
import { getCurrentTime } from "./utils"

export function useCurrentTime(): [string] {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  useEffect(() => {
    const i = setTimeout(() =>{
      setCurrentTime(getCurrentTime())
    }, 1000)
    return () => clearInterval(i)
  })

  return [currentTime]
}