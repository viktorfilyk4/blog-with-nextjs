'use client'

import { useHasMounted } from '@/lib/hooks'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'react-feather'
import { Tooltip } from 'react-tooltip'

const getTooltipText = (theme: string | undefined) =>
  theme === 'dark' ? 'Light Mode' : 'Dark Mode'

type DarkModeToggleProps = {}

export default function DarkModeToggle({}: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme()
  // const [tooltipText, setTooltipText] = useState(getTooltipText(theme))
  const hasMounted = useHasMounted()

  const handleThemeChanging = (theme: string) => {
    setTheme(theme)
    // setTooltipText(getTooltipText(theme))
  }

  return (
    <button
      className='icon-custom'
      onClick={() => handleThemeChanging(theme === 'dark' ? 'light' : 'dark')}
      data-tooltip-id='tooltip-theme-toggler'
      data-tooltip-content={getTooltipText(theme)}
    >
      {hasMounted && theme === 'dark' ? <Sun /> : <Moon />}
      {<Tooltip id='tooltip-theme-toggler' />}
    </button>
  )
}
