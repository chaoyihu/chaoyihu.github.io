import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Blog, { BlogInfo } from '@/components/Blog/Blog';
import Content from '@/markdown/blogs/fast-fibonacci.mdx';


// const content = ReactDOMServer.renderToString(<Content />);
const content = 'Need to implement Math support for MDX';

const info: BlogInfo = {
    title: "Fast Fibonacci",
    date: '2024-03-17',
    tags: ['Algorithm'],
    description: `Random topic: How to calculate the Nth fibonacci number in O(logN) time?`
}
export default function Page() {
  return (
    <Blog blogInfo={info} htmlString={content}/>
  );
}
