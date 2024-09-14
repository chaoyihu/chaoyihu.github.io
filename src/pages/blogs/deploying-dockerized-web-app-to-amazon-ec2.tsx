import Content from '@/markdown/blogs/deploying-dockerized-web-app-to-amazon-ec2.mdx';
import BlogHeader, { BlogInfo } from '@/components/Blog/BlogHeader';
import BlogBody from '@/components/Blog/BlogBody';


const info: BlogInfo = {
    title: "Running Web App on Amazon EC2 with Docker Compose",
    date: '2024-02-10',
    tags: ['AWS', 'Amazon EC2', 'Docker'],
    description: `Deploying a web application managed by docker compose to an Amazon EC2 Instance.`
}

export default function Page() {
    return (
        <div className='page-content'>
            <div className='blog__left-pane'>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
                <p>TOC</p>
            </div>
            <div className='blog__right-pane'>
                <BlogHeader info={info}/>
                <BlogBody content={Content}/>
            </div>
        </div>
    );
}