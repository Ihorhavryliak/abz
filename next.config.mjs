/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'frontend-test-assignment-api.abz.agency' },
      { hostname: 'https://frontend-test-assignment-api.abz.agency' },
    ],
  },
};

export default nextConfig;
