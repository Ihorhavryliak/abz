'use client'
import store, { RootState } from '@/redux/store'
import { Store } from '@reduxjs/toolkit'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<Store<RootState> | undefined>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
