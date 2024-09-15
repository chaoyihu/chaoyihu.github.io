import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Blog, { BlogInfo } from '@/components/Post/Blog';
import Content from '@/markdown/blogs/deploying-dockerized-web-app-to-amazon-ec2.mdx';


const content = ReactDOMServer.renderToString(<Content />);

const info: BlogInfo = {
    title: "Running Web App on Amazon EC2 with Docker Compose",
    date: '2024-02-10',
    tags: ['AWS', 'Amazon EC2', 'Docker'],
    description: `Deploying a web application managed by docker compose to an Amazon EC2 Instance.`
};

export default function Page() {
    return (
        <Blog blogInfo={info} htmlString={content}/>
    );
}
