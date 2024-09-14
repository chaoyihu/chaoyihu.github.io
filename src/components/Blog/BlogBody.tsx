import React from "react";

interface BlogBodyProps {
    content: React.ElementType;
}

const BlogBody: React.FC<BlogBodyProps> = ({ content: Content }) => {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#f1f1f1',
            left: '200px'
        }}>
            <Content />
        </div>
    )
};

export default BlogBody;
