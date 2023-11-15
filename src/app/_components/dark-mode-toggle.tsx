"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "react-feather"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

type DarkModeToggleProps = {}

export default function DarkModeToggle({}: DarkModeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Skeleton enableAnimation baseColor="#144ab5" />
  }

  return (
    <button className='dark:text-gray-400' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}
