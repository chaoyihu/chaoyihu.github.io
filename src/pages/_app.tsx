import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect, useRef } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (elementRef.current) {
        const elementHeight = elementRef.current.clientHeight;
        setHeaderHeight(elementHeight);
      }
    };
    updateHeaderHeight();  // Initial height calculation
    window.addEventListener(  // Update height on window resize
      'resize', updateHeaderHeight
    );
    return () => window.removeEventListener(  // Clean up listener on unmount
      'resize',updateHeaderHeight
    );
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div className="root">
      <div className="sticky-header" ref={elementRef}>
        <Navbar />
      </div>
      <div className="page-content" style={{ height: `calc(100vh - ${headerHeight}px)` }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
