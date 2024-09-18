import React, { useState } from 'react';
import HtmlContent from '@/components/Post/HTMLContent';
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
        <div className='two-column-wrapper'>
            <div className='main-text'>
                <div className='blog-header'>
                    <BlogHeader info={blogInfo} />
                </div>
                <div className='blog-content'>
                    <HtmlContent htmlString={htmlString} onRendered={handleHtmlContentRendered} />
                </div>
            </div>
            {showTableOfContents ? <TableOfContents /> : null}
        </div>
    )
}

export default Blog;