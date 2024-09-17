import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';


async function processHtml(htmlString: string): Promise<string> {
  const processedFile = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(htmlString);
  return processedFile.toString();
}

interface HtmlContentProps {
  htmlString: string;
  onRendered?: () => void;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ htmlString, onRendered }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const processContent = async () => {
      const processedHtml = await processHtml(htmlString);
      setHtmlContent(processedHtml);
    };
    processContent();
  }, [htmlString]);

  useEffect(() => {
    if (htmlContent && onRendered) {
      onRendered();
    }
  }, [htmlContent, onRendered]);

  return <div>{parse(htmlContent)}</div>;
};

export default HtmlContent;
