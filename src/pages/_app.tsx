import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import GitHubCorner from "@/components/Misc/GithubCorner";


export default function App({ Component, pageProps }: AppProps) {

  /* Dynamically update the height of page content based on rendered header height */
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cornerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ResizeHeader = () => {
      if (headerRef.current) {
        const elementHeight = headerRef.current.clientHeight;
        const cornerWidth = cornerRef.current.querySelector('svg').clientWidth;
        setHeaderHeight(elementHeight);
        const header = document.querySelector('.sticky-header') as HTMLElement;
        if (header) {
          header.style.paddingRight = `${cornerWidth}px`;
        }
      }
    };
    ResizeHeader();  // Initial height calculation
    window.addEventListener(  // Update height on window resize
      'resize', ResizeHeader
    );
    return () => window.removeEventListener(  // Clean up listener on unmount
      'resize',ResizeHeader
    );
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div className="root">
      
      <div className="sticky-header" ref={headerRef}>
        < div ref={cornerRef}>
          <GitHubCorner 
            username="chaoyihu" 
            repositoryName=""
            baseUrl="https://github.com/chaoyihu"
          />
        </div>
        <Navbar />
      </div>
      <div className="page-content" style={{ height: `calc(100vh - ${headerHeight}px)` }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
