import Content from '@/markdown/projects/facial-landmarks.mdx';
import Project from '@/components/Post/Project';
import ReactDOMServer from 'react-dom/server';

const content = ReactDOMServer.renderToString(<Content />);

export default function Page() {
    return (
        <Project htmlString={content}></Project>
    )
}