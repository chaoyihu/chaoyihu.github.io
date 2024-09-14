import Content from '@/markdown/blogs/run-multiple-apps-on-same-server-using-nginx.mdx';
import BlogHeader, { BlogInfo } from '@/components/Blog/BlogHeader';

const info: BlogInfo = {
    title: "Run Multiple Apps on One EC2 Instance using NGINX",
    date: '2024-02-23',
    tags: ['NGINX', 'AWS'],
    description: `This post documented how I set up NGINX as a reverse proxy to route
     requests to multiple applications running on one single Amazon EC2 instance.`
}

export default function Page() {
    return (
        <>
            <BlogHeader info={info}/>
            <Content />
        </>
    );
}