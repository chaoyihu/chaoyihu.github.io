import React, { useState, useEffect } from 'react';
import { BlogInfo } from '@/components/Post/Blog';
import Spinner, { SpinnerImgProps } from "@/components/Animation/Spinner"

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

    /* Animation */
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
      // Delay rendering the spinner to avoid initial static images before animation starts
      const timer = setTimeout(() => setShowAnimation(true), 500);
      return () => clearTimeout(timer);
    }, []);
  
    const spinner: SpinnerImgProps[] = [
        { src: "/images/animation/plant-1.webp", layer: -101, cycle: 60, angle: 359, key: 1 },
        { src: "/images/animation/plant-2.webp", layer: -102, cycle: 40, angle: 359, key: 2 },
        { src: "/images/animation/plant-3.webp", layer: -103, cycle: 280, angle: 359, key: 3 },
        { src: "/images/animation/plant-4.webp", layer: -104, cycle: 400, angle: -359, key: 4 },
        { src: "/images/animation/plant-5.webp", layer: -105, cycle: 600, angle: 359, key: 5 }
    ];

    return (
        <div className='blogs-index-wrapper'>
            <div className='animation-container'>
            {
                showAnimation ? (
                    <Spinner SpinnerImgs={spinner}/>
                ) : null
            }
            </div>
            <div id='blogs-pane'>
                <h1 className='post-title'>Blogs</h1>
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
        </div>
    )
}

