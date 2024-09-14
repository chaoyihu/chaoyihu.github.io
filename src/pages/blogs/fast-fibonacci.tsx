import Content from '@/markdown/blogs/fast-fibonacci.mdx';
import BlogHeader, { BlogInfo } from '@/components/Blog/BlogHeader';

const info: BlogInfo = {
    title: "Fast Fibonacci",
    date: '2024-03-17',
    tags: ['Algorithm'],
    description: `Random topic: How to calculate the Nth fibonacci number in O(logN) time?`
}

export default function Page() {
    return (
        <>
            <BlogHeader info={info}/>
            {/* <Content /> */}
        </>
    );
}
