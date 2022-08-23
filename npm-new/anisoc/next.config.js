/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/TcvRq2H",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
