const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
}

export default nextConfig
