/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  server: {
    port: 2000,
  },
};
