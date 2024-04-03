/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/rhulanisoc',
  async redirects() {
    return [
      {
        source: "/rhulanisoc/discord",
        destination: "https://discord.gg/s7rEUBSEJG",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
