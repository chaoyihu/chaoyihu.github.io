import createMDX from '@next/mdx';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: 'export',
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
};

const withMDX = createMDX({
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config .node = {
                fs: 'empty'
            }
        }
        return config;
    },
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
