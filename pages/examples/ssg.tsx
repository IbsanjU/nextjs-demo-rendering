import Head from 'next/head'
import Layout from '@/components/Layout'
import { GetStaticProps } from 'next'

type Props = {
  data: {
    timestamp: string
    message: string
    items: string[]
  }
  buildTime: string
}

export default function SSGExample({ data, buildTime }: Props) {
  return (
    <Layout>
      <Head>
        <title>SSG Example - Next.js Rendering</title>
        <meta name="description" content="Static Site Generation example" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            SSG (Static Site Generation)
          </h1>
          <p className="text-xl text-gray-300">
            This page was pre-rendered at build time and will never change unless you rebuild.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Static Data</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Build Time (Static):</p>
              <p className="text-white font-mono text-lg">{buildTime}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Data Timestamp:</p>
              <p className="text-white font-mono text-lg">{data.timestamp}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-1">Message:</p>
              <p className="text-white">{data.message}</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <p className="text-gray-400 text-sm mb-2">Static Items:</p>
              <ul className="space-y-1">
                {data.items.map((item, index) => (
                  <li key={index} className="text-white flex items-center">
                    <span className="text-green-400 mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-3">⚡ How SSG Works</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Pages are generated at build time (npm run build)</li>
            <li>• HTML is created once and served to all users</li>
            <li>• Fastest possible page loads - just serving static files</li>
            <li>• Data doesn&apos;t change until you rebuild and redeploy</li>
            <li>• Perfect for content that rarely changes</li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Code Example</h2>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
            <code className="text-sm text-gray-300">{`export const getStaticProps: GetStaticProps = async () => {
  // Fetch data at build time
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: {
      data,
      buildTime: new Date().toISOString(),
    },
    // No revalidate = static generation only
  }
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">Marketing Pages:</strong> Landing pages, about pages, pricing pages</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">Documentation:</strong> API docs, user guides, FAQs</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">Blogs:</strong> Blog posts that don&apos;t need frequent updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span><strong className="text-white">Portfolio Sites:</strong> Personal websites, project showcases</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Advantages</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">⚡ Performance</h3>
              <p className="text-sm">Fastest possible page loads with pre-rendered HTML</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">💰 Cost</h3>
              <p className="text-sm">Lower hosting costs - just serving static files</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">🔒 Security</h3>
              <p className="text-sm">Reduced attack surface with no server-side processing</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
              <h3 className="text-white font-semibold mb-2">📊 SEO</h3>
              <p className="text-sm">Excellent SEO with fully rendered HTML</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            This page will show the same timestamp no matter how many times you refresh!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real application, this would be your actual API or CMS
  // For demo purposes, we'll create the data directly
  const data = {
    timestamp: new Date().toISOString(),
    message: 'This data was generated at build time and is completely static',
    items: [
      'Static Item 1 - Generated at build',
      'Static Item 2 - Never changes',
      'Static Item 3 - Ultra fast delivery',
      'Static Item 4 - SEO optimized',
      'Static Item 5 - Perfect for content that rarely updates'
    ]
  }

  return {
    props: {
      data,
      buildTime: new Date().toISOString(),
    },
  }
}
