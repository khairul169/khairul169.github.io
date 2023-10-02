/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  async redirects() {
    return [
      {
        source: '/wa',
        destination: 'https://wa.me/6289694230818',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
