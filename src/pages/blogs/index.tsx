import React, { useState, useEffect } from 'react';
import { BlogInfo } from '@/components/Post/Blog';

type PathsResponse = string[];

export default function Blogs() {

    /* blogInfos:{ blogPath: blogInfo }*/
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
          }
        };
    
        fetchBlogs().then(() => {
            for (let [path, info] of blogInfos) {
                console.log(path, info.title);
            }
            setLoading(false);
        });
      }, []);

    return (
        <div className='blogs-index-wrapper'>
        <h1>Blogs</h1>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                Array.from(blogInfos.entries()).map(([path, info], idx) => (
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
        </div>
    )
}

