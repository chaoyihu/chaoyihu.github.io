import React, { useState, useEffect } from "react";

export interface BlogInfo {
    title: string;
    description: string;
    date: string;
    tags: string[];
}

interface BlogHeaderProps {
    info: BlogInfo;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ info }) => {
    return (
        <>
            <h1>{info.title}</h1>
            <p>{info.description}</p>
            <p>{info.date}</p>
            {info.tags.map((tag, idx)=>(<strong key={idx}>{tag}</strong>))}
        </>
    )
};

export default BlogHeader;
