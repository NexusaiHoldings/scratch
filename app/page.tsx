'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'scratch:body'

export default function Home() {
  const [value, setValue] = useState('')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved !== null) setValue(saved)
    } catch {
      // localStorage unavailable (SSR or private browsing)
    }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const next = e.target.value
    setValue(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable
    }
  }

  return (
    <div className="relative w-full h-screen">
      <textarea
        className="w-full h-screen resize-none bg-transparent text-zinc-100 p-4 text-lg font-mono focus:outline-none"
        value={value}
        onChange={handleChange}
        autoFocus
        aria-label="Scratch notes"
      />
      <span className="fixed bottom-2 right-3 text-xs text-zinc-600 pointer-events-none select-none">
        {value.length.toLocaleString()}
      </span>
    </div>
  )
}
