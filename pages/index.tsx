import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Home() {
  const examples = [
    {
      title: 'ISR (Incremental Static Regeneration)',
      description: 'Pages that regenerate at specified intervals. Combines benefits of static generation with the ability to update content without rebuilding.',
      path: '/examples/isr',
      color: 'from-blue-500 to-cyan-500',
      icon: '🔄'
    },
    {
      title: 'SSG (Static Site Generation)',
      description: 'Pages pre-built at build time. Best for content that doesn\'t change often. Provides fastest page loads.',
      path: '/examples/ssg',
      color: 'from-green-500 to-emerald-500',
      icon: '⚡'
    },
    {
      title: 'SSR (Server-Side Rendering)',
      description: 'Pages rendered on each request. Great for dynamic content that changes frequently or personalized data.',
      path: '/examples/ssr',
      color: 'from-purple-500 to-pink-500',
      icon: '🖥️'
    },
    {
      title: 'CSR (Client-Side Rendering)',
      description: 'Content rendered in the browser after the initial page load. Useful for highly interactive features.',
      path: '/examples/csr',
      color: 'from-orange-500 to-red-500',
      icon: '🌐'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Next.js Rendering Strategies Demo</title>
        <meta name="description" content="Comprehensive demonstration of Next.js rendering strategies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Next.js Rendering Strategies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore comprehensive examples of all major rendering strategies in Next.js.
            Each example demonstrates real-world use cases with detailed explanations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {examples.map((example) => (
            <Link
              key={example.path}
              href={example.path}
              className="block group"
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-2xl hover:scale-105 transform duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${example.color} mb-4 text-3xl`}>
                  {example.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {example.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {example.description}
                </p>
                <div className="mt-4 inline-flex items-center text-purple-400 group-hover:text-purple-300">
                  View Example 
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">About This Demo</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This application demonstrates the four main rendering strategies available in Next.js:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">ISR:</strong> Regenerates pages at specified intervals, providing a balance between static and dynamic content</li>
              <li><strong className="text-white">SSG:</strong> Pre-renders pages at build time for maximum performance</li>
              <li><strong className="text-white">SSR:</strong> Renders pages on each request for dynamic, personalized content</li>
              <li><strong className="text-white">CSR:</strong> Renders content in the browser for highly interactive experiences</li>
            </ul>
            <p>
              Click on any example above to see it in action with detailed explanations and code examples.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
