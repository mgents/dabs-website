import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-1', destination: '/about', permanent: true },
      { source: '/committee', destination: '/about/committee', permanent: true },
      { source: '/our-partners', destination: '/about/partners', permanent: true },
      { source: '/members-benefits', destination: '/membership/benefits', permanent: true },
      { source: '/sign-up-1', destination: '/membership/join', permanent: true },
      { source: '/sponsor', destination: '/sponsorship', permanent: true },
      { source: '/our-sponsors', destination: '/sponsorship/sponsors', permanent: true },
      { source: '/new-events', destination: '/events', permanent: true },
      { source: '/articles', destination: '/legal/articles', permanent: true },
      { source: '/welcome-to-dabs', destination: '/about', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
};

export default nextConfig;
