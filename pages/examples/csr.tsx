import Head from 'next/head'
import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'

type UserData = {
  timestamp: string
  message: string
  userData: {
    name: string
    email: string
    role: string
  }
}

export default function CSRExample() {
  const [data, setData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fetchTime, setFetchTime] = useState<string>('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const startTime = new Date().toISOString()
      const response = await fetch('/api/csr-data')
      
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      
      const result = await response.json()
      setData(result)
      setFetchTime(startTime)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>CSR Example - Next.js Rendering</title>
        <meta name="description" content="Client-Side Rendering example" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            CSR (Client-Side Rendering)
          </h1>
          <p className="text-xl text-gray-300">
            This page renders content in the browser after the initial page load.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Client-Side Data</h2>
            <button
              onClick={fetchData}
              disabled={loading}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-medium"
            >
              {loading ? 'Loading...' : 'Refresh Data'}
            </button>
          </div>

          {loading && !data && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded-lg p-4">
              <p className="text-red-300">Error: {error}</p>
            </div>
          )}

          {data && !loading && (
            <div className="space-y-4">
              <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                <p className="text-gray-400 text-sm mb-1">Fetch Time:</p>
                <p className="text-white font-mono text-lg">{fetchTime}</p>
              </div>
              <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                <p className="text-gray-400 text-sm mb-1">API Response Time:</p>
                <p className="text-white font-mono text-lg">{data.timestamp}</p>
              </div>
              <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                <p className="text-gray-400 text-sm mb-1">Message:</p>
                <p className="text-white">{data.message}</p>
              </div>
              <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                <p className="text-gray-400 text-sm mb-2">User Data:</p>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white font-medium">{data.userData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white font-medium">{data.userData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Role:</span>
                    <span className="text-white font-medium">{data.userData.role}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-orange-900 bg-opacity-30 border border-orange-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-3">🌐 How CSR Works</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Initial HTML loads quickly with minimal content</li>
            <li>• JavaScript executes in the browser</li>
            <li>• Data is fetched after page load using fetch/axios</li>
            <li>• Content updates dynamically without page refresh</li>
            <li>• Great for interactive features and user-specific data</li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Code Example</h2>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
            <code className="text-sm text-gray-300">{`export default function CSRExample() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data on component mount
    fetch('/api/csr-data')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  
  return <div>{/* Render data */}</div>
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span><strong className="text-white">Interactive Dashboards:</strong> Real-time charts and data visualization</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span><strong className="text-white">User Interactions:</strong> Forms, filters, search with instant feedback</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span><strong className="text-white">Dynamic Content:</strong> Content that updates based on user actions</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span><strong className="text-white">Private Data:</strong> Content that shouldn&apos;t be in initial HTML</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Trade-offs</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900 bg-opacity-30 border border-green-700 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">✅ Advantages</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Highly interactive</li>
                <li>• No server rendering needed</li>
                <li>• Fast subsequent updates</li>
                <li>• Great for SPAs</li>
              </ul>
            </div>
            <div className="bg-red-900 bg-opacity-30 border border-red-700 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">⚠️ Considerations</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Poor initial SEO</li>
                <li>• Blank page during load</li>
                <li>• Requires JavaScript</li>
                <li>• Larger bundle sizes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Click &quot;Refresh Data&quot; to fetch new data without reloading the page!
          </p>
        </div>
      </div>
    </Layout>
  )
}
