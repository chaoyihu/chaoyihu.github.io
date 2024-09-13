import Navbar from "@/components/Navbar/Navbar";
import Spinner, { SpinnerImgProps } from "@/components/Spinner/Spinner"
// import Overlay from "@/components/Overlay/Overlay"
import React, { useEffect, useState } from 'react';


export default function Home() {

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Delay rendering the spinner to avoid initial static images before animation starts
    const timer = setTimeout(() => setShowAnimation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const SpinnerImgsProps: SpinnerImgProps[] = [
    { src: "/images/cog-1.webp", layer: -101, cycle: 60, angle: 359, key: 1 },
    { src: "/images/cog-2.webp", layer: -102, cycle: 120, angle: -359, key: 2 },
    { src: "/images/cog-3.webp", layer: -103, cycle: 180, angle: 359, key: 3 },
    { src: "/images/cog-4.webp", layer: -104, cycle: 120, angle: 359, key: 4 },
    { src: "/images/cog-5.webp", layer: -105, cycle: 600, angle: 359, key: 5 }
  ];

  return (
    <div>
      {/* <Navbar /> */}
      {
        showAnimation ? (
          <div style={{ display: 'flex'}}>
            {/* <Overlay /> */}
            <div>
              <Spinner SpinnerImgs={SpinnerImgsProps}/>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}
