/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.producthunt.com'],
  },
}

module.exports = nextConfig
