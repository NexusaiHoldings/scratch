import { beforeEach, describe, expect, it } from 'vitest'

const STORAGE_KEY = 'scratch:body'

describe('localStorage scratch logic', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns null when storage is empty', () => {
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })

  it('saves and retrieves a value', () => {
    const text = 'hello world'
    localStorage.setItem(STORAGE_KEY, text)
    expect(localStorage.getItem(STORAGE_KEY)).toBe(text)
  })

  it('overwrites existing value', () => {
    localStorage.setItem(STORAGE_KEY, 'old')
    localStorage.setItem(STORAGE_KEY, 'new')
    expect(localStorage.getItem(STORAGE_KEY)).toBe('new')
  })

  it('removeItem clears the key', () => {
    localStorage.setItem(STORAGE_KEY, 'some notes')
    localStorage.removeItem(STORAGE_KEY)
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })

  it('other keys are not affected by removal', () => {
    localStorage.setItem('other:key', 'other value')
    localStorage.setItem(STORAGE_KEY, 'my notes')
    localStorage.removeItem(STORAGE_KEY)
    expect(localStorage.getItem('other:key')).toBe('other value')
  })
})
