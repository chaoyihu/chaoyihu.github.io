import React from 'react';
import ProjectListItem, { ProjectListItemProps } from '@/components/Post/ProjectListItem';

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
            coverImgSrc: "/images/projects/sprinting/sprinting-project-cover.gif",
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
        }
    ]


    return (
        <div className='project-index-wrapper'>
            <div id="project-pane">
                <h1 className="post-title p-name">Projects</h1>
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
        </div>
    )
}