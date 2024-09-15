import React, { useState } from 'react';
import HtmlContent from '@/components/Blog/HTMLContent';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import BlogHeader from './BlogHeader';


export interface BlogInfo {
    title: string;
    description: string;
    date: string;
    tags: string[];
}

interface BlogProps {
    blogInfo: BlogInfo;
    htmlString: string;
}

const Blog: React.FC<BlogProps> = ({ blogInfo, htmlString }) => {

    const [showTableOfContents, setShowTableOfContents] = useState(false);

    const handleHtmlContentRendered = () => {
      setShowTableOfContents(true);
    };

    return (
    <>
        <div className='main-text'>
        <BlogHeader info={blogInfo} />
        <HtmlContent htmlString={htmlString} onRendered={handleHtmlContentRendered} />
        </div>
        {showTableOfContents ? <TableOfContents /> : null}
    </>
    )
}

export default Blog;