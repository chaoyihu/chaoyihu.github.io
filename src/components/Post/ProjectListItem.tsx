import React from "react";

interface DisplayLink {
    href: string;
    text: string;
}

export interface ProjectListItemProps {
    coverImgSrc: string;
    tags: string[];
    title: string;
    description: string;
    links: DisplayLink[];
}

const ProjectListItem:React.FC<ProjectListItemProps> = (props) => {
    return (
        <div className="project-row">
            <div className="project-row-content">
                <img src={props.coverImgSrc} alt={`Cover for ${props.title}`}/>
                <div className="project-headline-box">
                    <h3><strong>{props.title}</strong></h3>
                    <p>
                        {props.tags.map((tag, idx) => (
                            <span key={idx} className="project-tag">{tag}</span>
                        ))}
                    </p>
                    <p>{props.description}</p>
                    <p>
                        {props.links.map((link, idx) => (
                            <span key={idx}>
                                <a href={link.href}>{link.text}</a>
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectListItem;