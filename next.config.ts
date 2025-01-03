import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com']
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  }
}

export default nextConfig
