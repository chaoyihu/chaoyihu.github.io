import createMDX from '@next/mdx';
import path from 'path';
import { fileURLToPath } from 'url';
import remarkAutolinkHeadings from 'remark-autolink-headings';

// Resolve __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

const withMDX = createMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkAutolinkHeadings, {
        content: '# '
      }],
    ],
  },
});

export default withMDX(nextConfig);
