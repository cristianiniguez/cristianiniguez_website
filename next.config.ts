import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'github.com',
      pathname: '/**'
    }]
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  }
}

export default nextConfig
