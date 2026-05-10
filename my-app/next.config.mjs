/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    // Permanent redirects for the renamed category routes so old links and
    // bookmarks continue to work.
    return [
      { source: '/cosmetics', destination: '/accessories', permanent: true },
      { source: '/umbrellas', destination: '/garden-parasols', permanent: true },
      { source: '/outdoor-table-sets', destination: '/outdoor-furniture', permanent: true },
    ];
  },
};

export default nextConfig;
