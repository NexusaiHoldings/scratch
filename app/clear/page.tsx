'use client'

import { useRouter } from 'next/navigation'

const STORAGE_KEY = 'scratch:body'

export default function ClearPage() {
  const router = useRouter()

  function handleClear() {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // localStorage unavailable
    }
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleClear}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Clear my notes
      </button>
    </div>
  )
}
