/** @type {import('next').NextConfig} */
import million from 'million/compiler'

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'frontend-test-assignment-api.abz.agency' },
      { hostname: 'https://frontend-test-assignment-api.abz.agency' },
    ],
  },
}

const millionConfig = {
  auto: true, // if you're using RSC: auto: { rsc: true },
}

export default million.next(nextConfig, millionConfig)
