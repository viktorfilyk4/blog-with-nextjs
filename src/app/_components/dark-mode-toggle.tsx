"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "react-feather"

type DarkModeToggleProps = {

}

export default function DarkModeToggle({}: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun/> : <Moon/>}
    </button>
  )
}
