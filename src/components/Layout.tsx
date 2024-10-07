import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-[1024px] mx-auto px-4 lg:px-16'>
      {children}
    </div>
  )
}

export default Layout