import React, { useEffect, useState } from 'react';
import Spinner, { SpinnerImgProps } from "@/components/Animation/Spinner";
import Runner, { RunnerDivProps } from '@/components/Animation/Runner';

export default function Home() {

    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Delay rendering the spinner to avoid initial static images before animation starts
        const timer = setTimeout(() => setShowAnimation(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const spinners: SpinnerImgProps[] = [
        {
            src: "/images/animation/spinner/cog-1.webp",
            layer: -101, cycle: 60, angle: 359, key: 1
        },
        {
            src: "/images/animation/spinner/cog-2.webp",
            layer: -102, cycle: 20, angle: -359, key: 2
        },
        {
            src: "/images/animation/spinner/cog-3.webp",
            layer: -103, cycle: 280, angle: 359, key: 3
        },
        {
            src: "/images/animation/spinner/cog-4.webp",
            layer: -104, cycle: 400, angle: -359, key: 4
        },
        {
            src: "/images/animation/spinner/cog-5.webp",
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
                "/images/animation/runner/floor-a.webp",
                "/images/animation/runner/floor-a.webp",
                "/images/animation/runner/floor-a.webp",
                "/images/animation/runner/floor-a.webp",
                "/images/animation/runner/floor-a.webp",
                "/images/animation/runner/floor-a.webp"
            ],
            layer: -20, cycle: 30, key: 1, mobile: true, bottom: '-36%'
        },
        {
            images: [
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-a1.webp",
                "/images/animation/runner/landscape-a2.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-a1.webp",
            ],
            layer: -30, cycle: 100, key: 2, mobile: true, bottom: '-40%'
        },
        {
            images: [
                "/images/animation/runner/landscape-a3.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-a3.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-a3.webp",
                "/images/animation/runner/blank.webp"
            ],
            layer: -40, cycle: 240, key: 3, mobile: true, bottom: '-40%'
        },
    ];

    return (
        <div className='index-wrapper'>
            <div className='animation-container' style={{ backgroundColor: 'azure', zIndex: -999}}>
                {
                    showAnimation ? (
                        <>
                            <Spinner spinnerImgs={spinners} />
                            <Runner runnerDivs={sliders} />
                        </>
                    ) : null
                }
            </div>
            <div id='home-pane'>
                <div className="poem-section">
                    <h2>Story of The Wanderer Bot</h2>
                    <p>In a realm where cogs and gears entwine,<br/>
                        A robot woke, his heart a ruby shine.<br/>
                        The passion inside burns bright and bold,<br/>
                        He dreamed of wonders yet untold.</p>
                    <p>The land of machines spun round,<br/>
                        Accurate, barren, with beauty profound.<br/>
                        Enormous cogs in a dance so grand,<br/>
                        The robot strode, a curious hand.</p>
                    <p>In the temple of alloy, whispers the old,<br/>
                        He overheard the stories that machines have told.</p>
                </div>
            </div>
        </div>
    )
}
