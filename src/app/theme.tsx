'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button className="focus:outline-none focus:ring-2 focus:ring-zinc-200" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <SunIcon className="h-6 w-6 text-zinc-200" /> : <MoonIcon className="h-6 w-6 text-zinc-200" />}
    </button>
  )
}
