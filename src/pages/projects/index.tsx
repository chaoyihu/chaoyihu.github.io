import React, { useState, useEffect } from 'react';
import ProjectListItem, { ProjectListItemProps } from '@/components/Post/ProjectListItem';
import Spinner, { SpinnerImgProps } from '@/components/Animation/Spinner';
import Runner, { RunnerDivProps } from '@/components/Animation/Runner';

export default function Projects() {

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
            coverImgSrc: "/images/projects/mri-classification/mri-project-data.png",
            tags: ["Image Processing", "Machine Learning", "Python", "MATLAB", "Medical Imaging"],
            title: "Detection of Alzheimer’s Disease Based on MRI Data",
            description: `Developed models to classify Alzheimer and cognitively-normal 
            patients based on MRI data from ADNI dataset.`,
            links: [
                {
                    href: "/projects/mri-alzheimer",
                    text: "More Details>>>"
                }
            ]
        },
        {
            coverImgSrc: "/images/projects/eeg-attention-fatigue/eeg-project-cover.jpeg",
            tags: ["Signal Processing", "Machine Learning", "Python", "MATLAB"],
            title: "Drowsiness detection based on EEG signals",
            description: `This projects uses signal processing and machine learning methods to 
            detect human attentional levels during prolonged tasks.`,
            links: [
                {
                    href: "/projects/eeg-attention-fatigue",
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
            coverImgSrc: "/images/projects/stock-price-monitoring/stock-price-monitor-project-cover.gif",
            tags: ["Java", "WebScraper", "JavaFX"],
            title: "Stock Price Monitor",
            description: `Desktop stock price monitoring at one single command.`,
            links: [
                {
                    href: "/projects/stock-price-monitoring",
                    text: "More Details>>>"
                }
            ]
        },
        {
            coverImgSrc: "/images/projects/vocabbler/vocabbler-words-page.png",
            tags: ["Web Application", "Node.js", "JavaScript", "Express", "SQLite"],
            title: "Vocabbler: Language Learner Helper App",
            description: `Vocabbler is a language-study application that helps you build 
            your own vocabulary, and quiz yourself on what you have studied.`,
            links: [
                {
                    href: "/projects/vocabbler",
                    text: "More Details>>>"
                },
                {
                    href: "http://44.203.49.24/vocabbler",
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


    /* Animation */
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Delay rendering the spinner to avoid initial static images before animation starts
        const timer = setTimeout(() => setShowAnimation(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const spinners: SpinnerImgProps[] = [
        {
            src: "/images/animation/spinner/plant-1.webp",
            layer: -101, cycle: 60, angle: 359, key: 1
        },
        {
            src: "/images/animation/spinner/plant-2.webp",
            layer: -102, cycle: 20, angle: -359, key: 2
        },
        {
            src: "/images/animation/spinner/plant-3.webp",
            layer: -103, cycle: 280, angle: 359, key: 3
        },
        {
            src: "/images/animation/spinner/plant-4.webp",
            layer: -104, cycle: 400, angle: -359, key: 4
        },
        {
            src: "/images/animation/spinner/plant-5.webp",
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
                "/images/animation/runner/floor-b.webp",
                "/images/animation/runner/floor-b.webp",
                "/images/animation/runner/floor-b.webp",
                "/images/animation/runner/floor-b.webp",
                "/images/animation/runner/floor-b.webp",
                "/images/animation/runner/floor-b.webp",
            ],
            layer: -20, cycle: 40, key: 1, mobile: true, bottom: '-13vw'
        },
        {
            images: [
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-b1.webp",
                "/images/animation/runner/landscape-b2.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/blank.webp",
            ],
            layer: -30, cycle: 100, key: 2, mobile: true, bottom: '-14vw'
        },
        {
            images: [
                "/images/animation/runner/landscape-b3.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-b3.webp",
                "/images/animation/runner/blank.webp",
                "/images/animation/runner/landscape-b3.webp",
                "/images/animation/runner/blank.webp"
            ],
            layer: -40, cycle: 240, key: 3, mobile: true, bottom: '-14vw'
        },
    ];

    return (
        <div className='project-index-wrapper'>
            <div className='animation-container' style={{ backgroundColor: 'honeydew', zIndex: -999}}>
                {
                    showAnimation ? (
                        <>
                            <Spinner spinnerImgs={spinners} />
                            <Runner runnerDivs={sliders} />
                        </>
                    ) : null
                }
            </div>
            <div id="project-pane">
                <h1 className="post-title">Projects</h1>
                {projectProps.map((prop, idx) => (
                    <ProjectListItem
                        key={idx}
                        coverImgSrc={prop.coverImgSrc}
                        tags={prop.tags}
                        title={prop.title}
                        description={prop.description}
                        links={prop.links}
                    />
                ))}                
            </div>
        </div>
    )
}