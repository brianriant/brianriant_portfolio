import createMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      ['rehype-highlight', {}], // Try as a tuple with package name
    ],
  },
});

export default withMDX(nextConfig);
