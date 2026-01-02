import Head from 'next/head'
import Layout from '@/components/Layout'
import { GetStaticProps } from 'next'

type Props = {
  data: {
    timestamp: string
    message: string
    randomNumber: number
  }
  buildTime: string
}

export default function ISRExample({ data, buildTime }: Props) {
  return (
    <Layout>
      <Head>
        <title>ISR Example - Next.js Rendering</title>
        <meta name="description" content="Incremental Static Regeneration example" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            ISR (Incremental Static Regeneration)
          </h1>
          <p className="text-xl text-gray-300">
            This page regenerates every 10 seconds while serving the cached version to users.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Live Data</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Page Build Time:</p>
              <p className="text-white font-mono text-lg">{buildTime}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">API Data Timestamp:</p>
              <p className="text-white font-mono text-lg">{data.timestamp}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Random Number:</p>
              <p className="text-white font-mono text-lg">{data.randomNumber}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Message:</p>
              <p className="text-white">{data.message}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-3">💡 How ISR Works</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Page is statically generated at build time</li>
            <li>• After the revalidation period (10 seconds), the next visitor triggers a regeneration</li>
            <li>• The stale page is served while regeneration happens in the background</li>
            <li>• Subsequent visitors see the updated page</li>
            <li>• Perfect for content that updates periodically (blogs, product listings, etc.)</li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Code Example</h2>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
            <code className="text-sm text-gray-300">{`export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from API (use absolute URL for external APIs at build time)
  const res = await fetch(\`\${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/isr-data\`)
  const data = await res.json()

  return {
    props: {
      data,
      buildTime: new Date().toISOString(),
    },
    // Revalidate every 10 seconds
    revalidate: 10,
  }
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">Blog Posts:</strong> Update content without rebuilding entire site</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">E-commerce:</strong> Product listings with periodic price/inventory updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">News Sites:</strong> Articles that need frequent but not real-time updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">Marketing Pages:</strong> Landing pages with analytics or A/B testing data</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Refresh this page multiple times after 10 seconds to see the data update!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real application, this would be your actual API endpoint
  // For demo purposes, we'll create the data directly
  const data = {
    timestamp: new Date().toISOString(),
    message: 'This data was generated using ISR',
    randomNumber: Math.floor(Math.random() * 1000)
  }

  return {
    props: {
      data,
      buildTime: new Date().toISOString(),
    },
    // Revalidate every 10 seconds
    revalidate: 10,
  }
}
