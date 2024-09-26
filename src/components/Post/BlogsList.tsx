import React, { useEffect, useState } from 'react';
import { BlogInfo } from '@/components/Post/Blog';


interface BlogsListProps {
    blogSlugs: string[];
    topN?: number;  // show all posts by default, or just the most recent n posts
}

const BlogsList: React.FC<BlogsListProps> = ({ blogSlugs, topN }) => {
    const [blogInfos, setBlogInfos] = useState<Map<string, BlogInfo>>(new Map());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const infos = new Map<string, BlogInfo>();
                for (const blogSlug of blogSlugs) {
                    const blogsPage = await import(`@/pages/blogs/${blogSlug}`);
                    infos.set(blogSlug, blogsPage.info);
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
    }, [blogInfos, topN]);


    return (<>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                Array.from(sortedBlogInfos.entries()).map(([path, info], idx) => (
                    <div className="blog-item" key={idx}>
                        <div className="blog-item-title">
                            <h3><a href={'/blogs/' + path}>{info.title}</a></h3>
                            {info.tags.map((tag, idx) => (
                                <span className="blog-tag" key={idx}>{ tag }</span>))}
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
    </>)
}


export default BlogsList;