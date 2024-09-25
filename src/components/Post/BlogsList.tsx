import React, { useEffect, useState } from 'react';

import { BlogInfo } from '@/components/Post/Blog';
import { TbMailOpened } from 'react-icons/tb';

interface BlogsListProps {
    topN?: number;  // show all posts by default, or just the most recent n posts
}

export const BlogsList: React.FC<BlogsListProps> = ({topN}) => {
    type PathsResponse = string[];

    const [blogInfos, setBlogInfos] = useState<Map<string, BlogInfo>>(new Map());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/getAllBlogs');
                const data: PathsResponse = await response.json();
    
                let infos = new Map<string, BlogInfo>();
    
                for (const blogPath of data) {
                    if (blogPath === '/index') { continue; }
                    const module = await import(`@/pages/blogs${blogPath}`);
                    infos.set(blogPath, module.info);
                }
                
                setBlogInfos(infos);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchBlogs();
    }, []);

    const [sortedBlogInfos, setSortedBlogInfos] = useState<Map<string, BlogInfo>>(new Map());
    
    // Additional useEffect to log blogInfos whenever it updates
    useEffect(() => {
        const sortedEntries = Array.from(blogInfos.entries()).sort((a, b) => {
            return b[1].date.localeCompare(a[1].date); // Descending order
        });
        const sortedInfos = new Map<string, BlogInfo>(
            topN ? sortedEntries.slice(0, topN) : sortedEntries
        );
        setSortedBlogInfos(sortedInfos);
    }, [blogInfos]);


    return (
        <>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                Array.from(sortedBlogInfos.entries()).map(([path, info], idx) => (
                    <div className="blog-item" key={idx}>
                        <div className="blog-item-title">
                            <h3><a href={'/blogs' + path}>{info.title}</a></h3>
                            {info.tags.map((tag) => <span className="blog-tag">{ tag }</span>)}
                        </div>
                        <div className="blog-item-description">
                            {info.description}
                        </div>
                        <div className="blog-item-date">
                            <time className="dt-published">{ info.date }</time>
                        </div>
                    </div>
                ))
            )
        }
        </>
    )
}