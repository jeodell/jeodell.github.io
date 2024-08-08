const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
}

export default nextConfig
