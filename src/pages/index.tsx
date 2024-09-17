import React, { useEffect, useState } from 'react';
import Spinner, { SpinnerImgProps } from "@/components/Spinner/Spinner"


export default function Home() {

    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Delay rendering the spinner to avoid initial static images before animation starts
        const timer = setTimeout(() => setShowAnimation(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const spinner: SpinnerImgProps[] = [
        { src: "/images/animation/cog-1.webp", layer: -101, cycle: 60, angle: 359, key: 1 },
        { src: "/images/animation/cog-2.webp", layer: -102, cycle: 20, angle: -359, key: 2 },
        { src: "/images/animation/cog-3.webp", layer: -103, cycle: 280, angle: 359, key: 3 },
        { src: "/images/animation/cog-4.webp", layer: -104, cycle: 400, angle: -359, key: 4 },
        { src: "/images/animation/cog-5.webp", layer: -105, cycle: 600, angle: 359, key: 5 }
    ];


    return (
        <div className='index-wrapper'>
            <div className='animation-container'>
            {
                showAnimation ? (
                    <Spinner SpinnerImgs={spinner}/>
                ) : null
            }
            </div>
            <div id='home-pane'>
                <h1 className="post-title">Welcome!</h1>
                <div id="index-intro">
                    <li><strong>Blogs</strong>: hosts technical posts that document my 
                    experiences as a developer, focusing on challenges I have encountered in 
                    development and steps I took to build viable solutions.</li>
                    <li><strong>Projects</strong>: presents projects I built in detail 
                    with videos and demo links.</li>
                </div>
            </div>
        </div>
    )
}
