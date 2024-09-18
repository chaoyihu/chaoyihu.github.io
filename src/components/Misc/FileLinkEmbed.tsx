
export interface FileLinkEmbedProps {
    src: string;
    height: string;
    width: string;
}

const FileLinkEmbed: React.FC<FileLinkEmbedProps> = ({src, height, width}) => {
    return (
        <iframe 
            src={src}
            height={height}
            width={width}
        >
        </iframe>
        
    )
}

export default FileLinkEmbed;