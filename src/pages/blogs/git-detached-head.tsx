import Content from '@/markdown/blogs/git-detached-head.mdx';
import BlogHeader, { BlogInfo } from '@/components/Blog/BlogHeader';


const info: BlogInfo = {
    title: "Resetting an Unwanted Merge Commit in Git",
    date: '2024-03-05',
    tags: ['Git'],
    description: `This post documents a quick solution to reset a commit.`
}

export default function Page() {
    return (
        <>
            <BlogHeader info={info}/>
            <Content />
        </>
    );
}