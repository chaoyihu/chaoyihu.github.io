import React, { useEffect, useState } from "react";
import Spinner, { SpinnerImgProps } from "@/components/Animation/Spinner";
import Runner, { RunnerDivProps } from '@/components/Animation/Runner';

export default function Contact () {
        /* Animation */
        const [showAnimation, setShowAnimation] = useState(false);

        useEffect(() => {
          // Delay rendering the spinner to avoid initial static images before animation starts
          const timer = setTimeout(() => setShowAnimation(true), 500);
          return () => clearTimeout(timer);
        }, []);
      
    
        const spinners: SpinnerImgProps[] = [
            {
                src: "/images/animation/spinner/geometry-1.webp",
                layer: -101, cycle: 60, angle: 359, key: 1
            },
            {
                src: "/images/animation/spinner/geometry-2.webp",
                layer: -102, cycle: 20, angle: -359, key: 2
            },
            {
                src: "/images/animation/spinner/geometry-3.webp",
                layer: -103, cycle: 280, angle: 359, key: 3
            },
            {
                src: "/images/animation/spinner/geometry-4.webp",
                layer: -104, cycle: 400, angle: -359, key: 4
            },
            {
                src: "/images/animation/spinner/geometry-5.webp",
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
                    "/images/animation/runner/floor-d.webp",
                    "/images/animation/runner/floor-d.webp",
                    "/images/animation/runner/floor-d.webp",
                    "/images/animation/runner/floor-d.webp",
                    "/images/animation/runner/floor-d.webp",
                    "/images/animation/runner/floor-d.webp"
                ],
                layer: -20, cycle: 30, key: 1, mobile: true, bottom: '-36%'
            },
            {
                images: [
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/landscape-d1.webp",
                    "/images/animation/runner/landscape-d2.webp",
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/landscape-d1.webp",
                ],
                layer: -30, cycle: 100, key: 2, mobile: true, bottom: '-40%'
            },
            {
                images: [
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/landscape-d3.webp",
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/blank.webp"
                ],
                layer: -40, cycle: 240, key: 3, mobile: true, bottom: '-40%'
            },
            {
                images: [
                    "/images/animation/runner/robot-friend-1.gif",
                    "/images/animation/runner/robot-friend-2.gif",
                    "/images/animation/runner/robot-friend-3.gif",
                    "/images/animation/runner/blank.webp",
                    "/images/animation/runner/robot-friend-1.gif",
                    "/images/animation/runner/robot-friend-2.gif"
                ],
                layer: -11, cycle: 30, key: 4, mobile: true, bottom: '-64%'
            },
        ];

    return (
        <div>
            <div className='animation-container' style={{ backgroundColor: 'dimgray', zIndex: -999}}>
                {
                    showAnimation ? (
                        <>
                            <Spinner spinnerImgs={spinners} />
                            <Runner runnerDivs={sliders} />
                        </>
                    ) : null
                }
            </div>
            <div className="poem-section">
                <p>Yet deep in his core, the ruby heart sighed,<br/>
                    For beauty and wonder were often belied.<br/>
                    He carried the lessons from each vibrant land,<br/>
                    A quest for connection, a touch of a hand.</p>

                    <p>So onward he traveled, through worlds yet unseen,<br/>
                    A robot with purpose, a seeker, a dream.<br/>
                    With a ruby heart glowing, warm and true,<br/>
                    He roamed every realm, always anew.</p>
            </div>
        </div>
    )
}

