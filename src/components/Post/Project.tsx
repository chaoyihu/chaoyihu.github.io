import React from 'react';
import HtmlContent from '@/components/Post/HTMLContent';


export interface ProjectProps {
    htmlString: string;
}

const Project: React.FC<ProjectProps> = ({ htmlString }) => {

    return (
        <div className='project-content'>
            <HtmlContent htmlString={htmlString} />
        </div>
    )
}

export default Project;