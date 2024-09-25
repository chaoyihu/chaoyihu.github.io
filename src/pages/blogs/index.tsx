import React, { useState, useEffect } from 'react';
import { BlogsList } from '@/components/Post/BlogsList';
import Spinner, { SpinnerImgProps } from "@/components/Animation/Spinner";
import Runner, { RunnerDivProps } from '@/components/Animation/Runner';

type PathsResponse = string[];

export default function Blogs() {

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
            layer: -10, key: 0, mobile: false, bottom: '0vw', width: '6%'
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
            layer: -20, cycle: 40, key: 1, mobile: true, bottom: '-13vw'
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
            layer: -30, cycle: 100, key: 2, mobile: true, bottom: '-14vw'
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
            layer: -40, cycle: 240, key: 3, mobile: true, bottom: '-14vw'
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
                <BlogsList />
            </div>
        </div>
    )
}

