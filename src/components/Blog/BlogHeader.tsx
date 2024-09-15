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
            <p>{info.description}</p>
            <p>{info.date}</p>
            {info.tags.map((tag, idx)=>(<strong key={idx}>{tag}</strong>))}
        </div>
    )
};

export default BlogHeader;
