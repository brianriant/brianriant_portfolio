import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      ['rehype-highlight', {}],
    ],
  },
});

export default withMDX(nextConfig);