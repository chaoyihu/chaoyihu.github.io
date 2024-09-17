import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Blog from '@/components/Post/Blog';
import { blogInfo } from '@/markdown/blogs/build-c-extension-for-python';
import Content from '@/markdown/blogs/build-c-extension-for-python.mdx';


const content = ReactDOMServer.renderToString(<Content />);

// const info: BlogInfo = {
//     title: "Build a C Extension for Python using Python API on Linux",
//     date: '2024-01-21',
//     tags: ['Python', 'C/C++'],
//     description: `Explaining how I followed Python's Doc to build a Python C extension 
//     using Python API, which can be imported as a library to run shell commands in Python 
//     scripts.`
// };

export default function Page() {
  return (
    <Blog blogInfo={blogInfo} htmlString={content}/>
  );
}