import React, { useState, useEffect } from 'react';
import { BlogInfo } from '@/components/Post/Blog';
import Spinner, { SpinnerImgProps } from "@/components/Animation/Spinner";
import Runner, { RunnerDivProps } from '@/components/Animation/Runner';

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
  

    const spinners: SpinnerImgProps[] = [
        {
            src: "/images/animation/spinner/candy-1.webp",
            layer: -101, cycle: 60, angle: 359, key: 1
        },
        {
            src: "/images/animation/spinner/candy-2.webp",
            layer: -102, cycle: 20, angle: -359, key: 2
        },
        {
            src: "/images/animation/spinner/candy-3.webp",
            layer: -103, cycle: 280, angle: 359, key: 3
        },
        {
            src: "/images/animation/spinner/candy-4.webp",
            layer: -104, cycle: 400, angle: -359, key: 4
        },
        {
            src: "/images/animation/spinner/candy-5.webp",
            layer: -105, cycle: 600, angle: 359, key: 5
        }
    ];

    const sliders: RunnerDivProps[] = [
        {
            images: [
                "/images/animation/runner/robot.gif"
            ],
            layer: -10, cycle: 0, key: 0, mobile: false, bottom: '3%'
        },
        {
            images: [
                "/images/animation/runner/floor-c.webp",
                "/images/animation/runner/floor-c.webp",
                "/images/animation/runner/floor-c.webp",
                "/images/animation/runner/floor-c.webp",
                "/images/animation/runner/floor-c.webp",
                "/images/animation/runner/floor-c.webp"
            ],
            layer: -20, cycle: 30, key: 1, mobile: true, bottom: '-36%'
        },
        {
            images: [
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-c1.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-c2.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-c1.webp",
            ],
            layer: -30, cycle: 100, key: 2, mobile: true, bottom: '-40%'
        },
        {
            images: [
                "/images/animation/runner/landscape-c3.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-c3.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-c3.webp",
                "/images/animation/runner/blank.webp"
            ],
            layer: -40, cycle: 240, key: 3, mobile: true, bottom: '-40%'
        },
    ];

    return (
        <div className='blogs-index-wrapper'>
            <div className='animation-container' style={{ backgroundColor: 'wheat', zIndex: -999}}>
                {
                    showAnimation ? (
                        <>
                            <Spinner spinnerImgs={spinners} />
                            <Runner runnerDivs={sliders} />
                        </>
                    ) : null
                }
            </div>
            <div id='blogs-pane'>
                <h1 className='post-title'>Blogs</h1>
                <div className="poem-section">
                    <p>Onward it travels, through realms so vast,<br/>
                        With a ruby heart, its spirit steadfast.<br/>
                        Mountains of pastries, rivers of cream,<br/>
                        In this candy world, he dared to dream.</p>

                    <p>Lollipops glimmered like stars in the night,<br/>
                        Chocolate waterfalls cascaded in flight.<br/>
                        Cinnamon in the air, sprinkles on the floor,<br/>
                        Endless wonders, so much to explore!</p>
                </div>
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

