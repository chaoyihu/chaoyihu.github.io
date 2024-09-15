import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Blog, { BlogInfo } from '@/components/Post/Blog';
import Content from '@/markdown/blogs/solving-a-tzinfo-issue.mdx';

const content = ReactDOMServer.renderToString(<Content />);

const info: BlogInfo = {
    title: "Investigating a timezone configuring issue in Docker",
    date: '2024-03-22',
    tags: ['Linux', 'Docker'],
    description: `Documenting my investigation of a timezone issue: 
    'RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime' causing 
    incorrect results of utcoffset.`
}

export default function Page() {
    return (
    <Blog blogInfo={info} htmlString={content}/>
    );
}
