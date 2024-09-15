import React from "react";
import { BlogInfo } from "./Blog";


interface BlogHeaderProps {
    info: BlogInfo;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ info }) => {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#bdbdbd'
        }}>
            <h1 id="post-title" className="post-title">{info.title}</h1>
            <p className="blog-item-date" style={{ display: 'flex', margin: '0', color: 'black'}}>
                Date: {info.date} | 
                Tags: {info.tags.map((tag, idx)=>(<span className='blog-tag' key={idx}>{tag}</span>))}
            </p>
            <p className="blog-item-description" style={{ color: 'gray'}}>{info.description}</p>
        </div>
    )
};

export default BlogHeader;
