import { useEffect, useRef } from 'react';

const TableOfContents = () => {
  const tocContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      const tocContainer = tocContainerRef.current;

      if (tocContainer) {

        tocContainer.innerHTML = '';
        const tocList = document.createElement("ul");
        tocList.id = "toc-list";

        const title = document.querySelector("#post-title");
        const headings = document.querySelectorAll("h1:not(.post-title), h2, h3");

        const titleItem = document.createElement("p");
        const titleLink = document.createElement("a");
        if (title) {
          titleLink.textContent = title.textContent ?? '';
          titleLink.href = "#" + title.id;
          titleItem.appendChild(titleLink);
          tocList.appendChild(titleItem);
        }

        headings.forEach((heading) => {
          const tocItem = document.createElement("li");
          const tocLink = document.createElement("a");

          tocLink.textContent = heading.textContent ?? ''; 
          tocLink.href = "#" + heading.id;

          const headingLevel = parseInt(heading.tagName.substring(1));
          tocItem.style.marginLeft = (20 * (headingLevel - 1)) + 'px';
          tocItem.style.fontSize = (16 - (headingLevel - 1)) + 'px';

          tocItem.appendChild(tocLink);
          tocList.appendChild(tocItem);
        });

        tocContainer.appendChild(tocList);
      }
  }, []);

  return (
    <div id="toc-sidebar" ref={tocContainerRef}></div>
  );
};

export default TableOfContents;
