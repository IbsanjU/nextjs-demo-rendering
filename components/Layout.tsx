import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  
  const isActive = (path: string) => {
    return router.pathname === path
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-bold">
                Next.js Rendering
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                href="/examples/isr"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/examples/isr') 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                ISR
              </Link>
              <Link
                href="/examples/ssg"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/examples/ssg') 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                SSG
              </Link>
              <Link
                href="/examples/ssr"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/examples/ssr') 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                SSR
              </Link>
              <Link
                href="/examples/csr"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/examples/csr') 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                CSR
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
