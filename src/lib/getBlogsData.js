import fs from 'fs';
import path from 'path';

export const getAllBlogSlugs = () => {
    const raw = fs.readdirSync(path.join(process.cwd(), '/src/markdown/blogs'))
        .filter(file => /\.mdx?$/.test(file))
        .map(file => file.replace(/\.mdx?$/, ''));
    return raw;
}