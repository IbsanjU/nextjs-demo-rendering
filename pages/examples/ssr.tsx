import Head from 'next/head'
import Layout from '@/components/Layout'
import { GetServerSideProps } from 'next'

type Props = {
  data: {
    timestamp: string
    message: string
    randomNumber: number
  }
  requestTime: string
  userAgent: string
}

export default function SSRExample({ data, requestTime, userAgent }: Props) {
  return (
    <Layout>
      <Head>
        <title>SSR Example - Next.js Rendering</title>
        <meta name="description" content="Server-Side Rendering example" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            SSR (Server-Side Rendering)
          </h1>
          <p className="text-xl text-gray-300">
            This page is rendered fresh on every request with personalized data.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Dynamic Data</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Request Time:</p>
              <p className="text-white font-mono text-lg">{requestTime}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Data Timestamp:</p>
              <p className="text-white font-mono text-lg">{data.timestamp}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Random Number (changes on refresh):</p>
              <p className="text-white font-mono text-lg">{data.randomNumber}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Message:</p>
              <p className="text-white">{data.message}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Your User Agent:</p>
              <p className="text-white font-mono text-sm break-all">{userAgent}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-900 bg-opacity-30 border border-purple-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-3">🖥️ How SSR Works</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Server renders the page on every request</li>
            <li>• Fresh data is fetched for each user</li>
            <li>• Perfect for personalized or frequently changing content</li>
            <li>• Slower than static pages but always up-to-date</li>
            <li>• Great SEO as content is in the initial HTML</li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Code Example</h2>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
            <code className="text-sm text-gray-300">{`export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data on every request
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  
  // Access request information
  const userAgent = context.req.headers['user-agent'] || 'Unknown'

  return {
    props: {
      data,
      requestTime: new Date().toISOString(),
      userAgent,
    },
  }
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span><strong className="text-white">Personalized Dashboards:</strong> User-specific data that changes frequently</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span><strong className="text-white">Real-time Data:</strong> Stock prices, live scores, social feeds</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span><strong className="text-white">Authentication:</strong> Pages requiring user session data</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span><strong className="text-white">Dynamic Content:</strong> Content that must be fresh on every load</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Trade-offs</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900 bg-opacity-30 border border-green-700 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">✅ Advantages</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Always fresh data</li>
                <li>• Access to request context</li>
                <li>• Good for personalization</li>
                <li>• SEO friendly</li>
              </ul>
            </div>
            <div className="bg-red-900 bg-opacity-30 border border-red-700 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">⚠️ Considerations</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Slower than static pages</li>
                <li>• Server load increases with traffic</li>
                <li>• Requires server infrastructure</li>
                <li>• Higher hosting costs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Refresh this page to see the timestamp and random number change instantly!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // In a real application, this would fetch from your API
  // For demo purposes, we'll create the data directly
  const data = {
    timestamp: new Date().toISOString(),
    message: 'This data was generated server-side on this request',
    randomNumber: Math.floor(Math.random() * 1000)
  }

  // Get user agent from request headers
  const userAgent = context.req.headers['user-agent'] || 'Unknown'

  return {
    props: {
      data,
      requestTime: new Date().toISOString(),
      userAgent,
    },
  }
}
