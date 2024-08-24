import { ContactMe, Header } from '@/components'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <ContactMe />
    </div>
  )
}

export default layout