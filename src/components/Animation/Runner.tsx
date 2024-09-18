import React from "react";

const Runner: React.FC<{speed: number}> = ({ speed }) => {
    return (
        <div>
            <div className='runner-container' style={{zIndex: -10, bottom: 0}}>
                <div className="runner-immobile">
                    <img src="/images/animation/runner/runner-robot.gif"></img>
                </div>
            </div>
            <div className="runner-container" style={{zIndex: -20}}>
                {/* The floor */}
                <div className="runner-slider">
                    <img src="/images/animation/runner/runner-floor.webp"></img>
                    <img src="/images/animation/runner/runner-floor.webp"></img>
                </div>
                <div className="runner-slider">  {/* duplicate it*/}
                    <img src="/images/animation/runner/runner-floor.webp"></img>
                    <img src="/images/animation/runner/runner-floor.webp"></img>
                </div>
            </div>
            <div className="runner-container" style={{zIndex: -30}}>
                {/* The landscape */}
                <div className="runner-slider">
                    <img src="/images/animation/runner/runner-landscape-1.webp"></img>
                    <img src="/images/animation/runner/runner-landscape-2.webp"></img>
                </div>
                <div className="runner-slider">  {/* duplicate it*/}
                    <img src="/images/animation/runner/runner-landscape-1.webp"></img>
                    <img src="/images/animation/runner/runner-landscape-2.webp"></img>
                </div>
            </div>
        </div>
    )
};

export default Runner;