import React from "react";

const Runner: React.FC<{speed: number}> = ({ speed }) => {
    return (
        <div>
            <div className="runner-container">
                {/* The character */}
                <div className="runner-images">
                    <img src="/images/animation/cog-5.webp"></img>
                    <img src="/images/animation/cog-4.webp"></img>
                    <img src="/images/animation/cog-3.webp"></img>
                    <img src="/images/animation/cog-2.webp"></img>
                </div>
                <div className="runner-images">  {/* duplicate it*/}
                    <img src="/images/animation/cog-5.webp"></img>
                    <img src="/images/animation/cog-4.webp"></img>
                    <img src="/images/animation/cog-3.webp"></img>
                    <img src="/images/animation/cog-2.webp"></img>
                </div>
            </div>
            <div className="runner-container">
                {/* The floor */}
                <div className="runner-images">
                    <img src="/images/animation/plant-5.webp"></img>
                    <img src="/images/animation/plant-4.webp"></img>
                    <img src="/images/animation/plant-3.webp"></img>
                    <img src="/images/animation/plant-2.webp"></img>
                </div>
                <div className="runner-images">  {/* duplicate it*/}
                    <img src="/images/animation/plant-5.webp"></img>
                    <img src="/images/animation/plant-4.webp"></img>
                    <img src="/images/animation/plant-3.webp"></img>
                    <img src="/images/animation/plant-2.webp"></img>
                </div>
            </div>
            <div className="runner-container">
                {/* The landscape */}
                <div className="runner-images">
                    <img src="/images/animation/star-5.webp"></img>
                    <img src="/images/animation/star-4.webp"></img>
                    <img src="/images/animation/star-3.webp"></img>
                    <img src="/images/animation/star-2.webp"></img>
                </div>
                <div className="runner-images">  {/* duplicate it*/}
                    <img src="/images/animation/star-5.webp"></img>
                    <img src="/images/animation/star-4.webp"></img>
                    <img src="/images/animation/star-3.webp"></img>
                    <img src="/images/animation/star-2.webp"></img>
                </div>
            </div>
        </div>
    )
};

export default Runner;