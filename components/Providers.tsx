'use client'

import React from 'react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children:ReactNode
}
const queryClient = new QueryClient()
const Providers: FC<LayoutProps>= ({children})=> {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default Providers