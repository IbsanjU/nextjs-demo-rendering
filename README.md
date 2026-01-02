# Next.js Rendering Strategies Demo

A comprehensive Next.js application demonstrating all major rendering strategies with real-world examples and detailed explanations.

## 🚀 Features

This application showcases four main rendering strategies in Next.js:

- **ISR (Incremental Static Regeneration)** - Pages that regenerate at specified intervals
- **SSG (Static Site Generation)** - Pages pre-built at build time
- **SSR (Server-Side Rendering)** - Pages rendered on each request
- **CSR (Client-Side Rendering)** - Client-side rendered pages with dynamic data

## 📋 What's Included

- ✅ Home page with navigation to all rendering examples
- ✅ Example pages for each rendering strategy with detailed explanations
- ✅ API routes for data fetching demonstrations
- ✅ Tailwind CSS for modern, responsive styling
- ✅ TypeScript for type safety
- ✅ Complete documentation for each approach
- ✅ Proper configuration files (next.config.js, tailwind.config.js, tsconfig.json)
- ✅ .gitignore configured for Node.js projects

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/IbsanjU/nextjs-demo-rendering.git
   cd nextjs-demo-rendering
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Build and Production

### Build the application

```bash
npm run build
```

This will create an optimized production build in the `.next` folder.

### Start production server

```bash
npm run start
```

The production server will start on [http://localhost:3000](http://localhost:3000).

## 📖 Rendering Strategies Explained

### 1. ISR (Incremental Static Regeneration)

**Location:** `/examples/isr`

**How it works:**
- Pages are statically generated at build time
- After the revalidation period, the next visitor triggers a regeneration in the background
- Stale content is served while regeneration happens
- Subsequent visitors get the updated page

**Use cases:**
- Blog posts with periodic updates
- E-commerce product listings
- News articles
- Marketing pages with analytics data

**Code example:**
```typescript
export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData()
  
  return {
    props: { data },
    revalidate: 10, // Regenerate every 10 seconds
  }
}
```

### 2. SSG (Static Site Generation)

**Location:** `/examples/ssg`

**How it works:**
- Pages are generated at build time
- HTML is created once and served to all users
- Fastest possible page loads
- Content doesn't change until next build

**Use cases:**
- Marketing and landing pages
- Documentation sites
- Blogs with infrequent updates
- Portfolio websites

**Code example:**
```typescript
export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData()
  
  return {
    props: { data },
    // No revalidate = pure static generation
  }
}
```

### 3. SSR (Server-Side Rendering)

**Location:** `/examples/ssr`

**How it works:**
- Server renders the page on every request
- Fresh data is fetched for each user
- Always up-to-date content
- Access to request context (headers, cookies, etc.)

**Use cases:**
- Personalized dashboards
- Real-time data displays
- Authentication-required pages
- Frequently changing content

**Code example:**
```typescript
export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchData()
  
  return {
    props: { data },
  }
}
```

### 4. CSR (Client-Side Rendering)

**Location:** `/examples/csr`

**How it works:**
- Initial HTML loads with minimal content
- JavaScript executes in the browser
- Data fetched after page load using fetch/axios
- Content updates dynamically

**Use cases:**
- Interactive dashboards
- Real-time data visualization
- User-specific dynamic content
- Features requiring high interactivity

**Code example:**
```typescript
export default function CSRExample() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  return <div>{/* Render data */}</div>
}
```

## 📁 Project Structure

```
nextjs-demo-rendering/
├── pages/
│   ├── api/                    # API routes
│   │   ├── csr-data.ts
│   │   ├── isr-data.ts
│   │   ├── ssg-data.ts
│   │   └── ssr-data.ts
│   ├── examples/               # Example pages
│   │   ├── csr.tsx            # Client-side rendering
│   │   ├── isr.tsx            # Incremental static regeneration
│   │   ├── ssg.tsx            # Static site generation
│   │   └── ssr.tsx            # Server-side rendering
│   ├── _app.tsx               # App component
│   ├── _document.tsx          # Document component
│   └── index.tsx              # Home page
├── components/
│   └── Layout.tsx             # Shared layout component
├── styles/
│   └── globals.css            # Global styles with Tailwind
├── public/                     # Static assets
├── .gitignore                 # Git ignore file
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎨 Styling

The application uses **Tailwind CSS** for styling with a custom dark theme featuring:
- Gradient backgrounds
- Glassmorphism effects
- Smooth transitions
- Responsive design
- Modern color scheme (purple, gray, and accent colors)

## 🔧 Configuration Files

### next.config.js
Basic Next.js configuration with React strict mode enabled.

### tailwind.config.js
Tailwind CSS configuration scanning all page and component files.

### tsconfig.json
TypeScript configuration with strict mode and path aliases.

### postcss.config.js
PostCSS configuration for Tailwind CSS processing.

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js/) - Next.js repository

### Rendering Strategies
- [Data Fetching Overview](https://nextjs.org/docs/basic-features/data-fetching/overview)
- [SSG Documentation](https://nextjs.org/docs/basic-features/pages#static-generation)
- [SSR Documentation](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
- [ISR Documentation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
- [Client-side Fetching](https://nextjs.org/docs/basic-features/data-fetching/client-side)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a comprehensive demonstration of Next.js rendering strategies.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The React community for continuous inspiration
