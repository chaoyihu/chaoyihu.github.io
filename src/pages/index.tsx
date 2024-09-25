import React, { useEffect, useState } from 'react';
import Spinner, { SpinnerImgProps } from "@/components/Animation/Spinner";
import Runner, { RunnerDivProps } from '@/components/Animation/Runner';
import ProjectListItem, { ProjectListItemProps } from '@/components/Post/BlogListItem';
import FileLinkEmbed from '@/components/Misc/FileLinkEmbed';
import { BlogsList } from '@/components/Post/BlogsList';

import Intro from '@/markdown/home-intro.mdx';

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
            layer: -10, key: 0, mobile: false, bottom: '0vw', width: '6%'
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
            layer: -20, cycle: 40, key: 1, mobile: true, bottom: '-13vw'
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
            layer: -30, cycle: 100, key: 2, mobile: true, bottom: '-14vw'
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
            layer: -40, cycle: 240, key: 3, mobile: true, bottom: '-14vw'
        },
    ];

    const projectProps: ProjectListItemProps[] = [
        {
            coverImgSrc: "/images/projects/ultrasound-image-segmentation/ultrasound-project-result.png",
            tags: ["Image Processing", "Deep Learning", "Python"],
            title: "Semantic Segmentation of Ultrasound Images",
            description: `Collaborated with clinicians at Beijing Anzhen Hospital to 
            build a deep learning network that segments anatomical structures in 
            ultrasound images.`,
            links: [
                {
                    href: "/projects/ultrasound-image-segmentation",
                    text: "More Details>>>"
                }
            ]
        },
        {
            coverImgSrc: "/images/projects/behavioral-experiment/maze-setting.png",
            tags: ["Video Processing", "Python", "MATLAB", "NumPy", "Pandas"],
            title: "Development of laboratory software tools to assist animal experiment",
            description: `Video processing, batch processing, data visualization, and GUI 
            development to assist scientific research.`,
            links: [
                {
                    href: "/projects/behavioral-experiment",
                    text: "More Details>>>"
                }
            ]
        },
        {
            coverImgSrc: "/images/projects/sprinting/sprinting-project-cover.png",
            tags: ["Web Application", "Python", "JavaScript", "Web Framework",
                "Redis", "Pub/Sub", "WebSocket"],
            title: "Sprinting: Web-Based Sprint Planning and Collaboration",
            description: `Sprinting is a dynamic web application to streamline sprint 
            planning, sprint events hosting and progress sharing among team members.`,
            links: [
                {
                    href: "/projects/sprinting",
                    text: "More Details>>>"
                },
                {
                    href: "http://44.203.49.24/sprinting",
                    text: "Web Demo>>>"
                }
            ]
        },
        {
            coverImgSrc: "/images/projects/chaoyihu.github.io/chaoyihu.github.io-cover.png",
            tags: ["Next.js", "React", "TypeScript"],
            title: "chaoyihu.github.io",
            description: `Hey, this is the website you are looking at! I call this a good example 
            of self-reference. 😉`,
            links: [
                {
                    href: "/projects/chaoyihu.github.io",
                    text: "Read a poem >>>"
                }
            ]
        },
    ]


    return (
        <div className='index-wrapper'>
            <div className='animation-container' style={{ backgroundColor: 'azure', zIndex: -999 }}>
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
                <h1 className="post-title">Home</h1>
                <Intro />
                <div className='home-section'>
                <h2>Featured Projects</h2>
                    <p>Now, let me show you what I can do! Listed below are a
                        couple of projects to showcase my skills. Welcome to
                        check out the <a href='/projects'>Projects</a> page for a more complete list!</p>
                    {projectProps.map((prop) => (
                        <ProjectListItem
                            coverImgSrc={prop.coverImgSrc}
                            tags={prop.tags}
                            title={prop.title}
                            description={prop.description}
                            links={prop.links}
                        />
                    ))}
                </div>
                <div className='home-section'>
                    <h2>Recent Blogs</h2>
                    <p>
                        The <a href="/blogs">Blogs</a> page contains technical posts that
                        document my experiences as a developer, focusing on challenges I have 
                        encountered and steps I took to build viable solutions. Here are some
                        of my recent blogs:
                    </p>
                    <BlogsList topN={4}/>
                </div>
                <div className='home-section' id='home-section-resume'>
                    <h2>My Resume</h2>
                    <FileLinkEmbed
                        src="/chaoyihu.resume.web.pdf"
                        height='400px'
                        width='100%'
                    />
                </div>
                <div className='home-section'>
                    <h2>Contact</h2>
                    <p>
                        If you are interested, please don't hesitate to <a href="/contact">Get 
                        in Touch</a>!
                    </p>
                </div>
            </div>
        </div>
    )
}
