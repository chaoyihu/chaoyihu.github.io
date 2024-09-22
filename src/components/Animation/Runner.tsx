import React from "react";
import styled, { keyframes } from 'styled-components';

export interface RunnerDivProps {
    images: string[];  // sources list of slider images
    layer: number; // z-index
    cycle: number;  // animation cycle in seconds. smaller cycle = faster sliding
    key: number;
    mobile: boolean;
    bottom: string;  // position
}

interface RunnerProps {
    runnerDivs: RunnerDivProps[];
}

const slide = () => keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-200%);
    }
`;

const RunnerSlider = styled.div<RunnerDivProps>`
    width: 100%;
    display: inline-block;
    animation: ${slide()} ${props => props.cycle}s infinite linear;
`;

const RunnerImmobile = styled.div<RunnerDivProps>`
    width: 100%;
`;

const Runner: React.FC<RunnerProps> = ({ runnerDivs }) => {
    return (
        <div>    
            {runnerDivs.map(({ images, layer, cycle, key, mobile, bottom }) => (
                <div className="runner-container" style={{ zIndex: layer, bottom: bottom}}>
                    {
                        mobile ? (
                            <RunnerSlider
                                images={images}
                                layer={layer}
                                cycle={cycle}
                                key={key}
                                mobile={mobile}
                                bottom={bottom}
                            >
                                {images.map((src, idx) => ( <img src={src} width="50%" key={idx} /> ))}
                                {/* the sliding images should be duplicated 
                                to ensure continuous sliding */}
                                {images.map((src, idx) => ( <img src={src} width="50%" key={idx} /> ))}
                            </RunnerSlider> 
                        ) : (
                            <RunnerImmobile
                                images={images}
                                layer={layer}
                                cycle={cycle}
                                key={key}
                                mobile={mobile}
                                bottom={bottom}
                            >
                                {/* some images, such as the robot, has
                                a fixed position */}
                                {images.map((src, idx) => ( <img src={src} width='6%' key={idx} /> ))}
                            </RunnerImmobile>
                        )
                    }
                </div>
            ))}
        </div>  
    );
};


export default Runner;
