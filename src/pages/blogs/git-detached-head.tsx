import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Blog, { BlogInfo } from '@/components/Post/Blog';
import Content from '@/markdown/blogs/git-detached-head.mdx';


const content = ReactDOMServer.renderToString(<Content />);

export const info: BlogInfo = {
    title: "Resetting an Unwanted Merge Commit in Git",
    date: '2024-03-05',
    tags: ['Git'],
    description: `This post documents a quick solution to reset a commit.`
}


export default function Page() {
    return (
    <Blog blogInfo={info} htmlString={content}/>
    );
}
