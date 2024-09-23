import React from "react";
import styled, { keyframes } from 'styled-components';

export interface RunnerDivProps {
    /*
        images: sources list of slider images. To ensure seamless sliding, the
            list should have same prefix and suffix.
            Example: [A, B, C, D, A, B] slides from right to left like this (image
                    width is 50% each):
                                    -------------
                                    |  A  |  B  |  C  |  D  |  A  |  B  |
                                    | (visible) |   (outside of screen)
                                    -------------
                      <<<<  sliding right to left (200%)  <<<<
                                    -------------
            |  A  |  B  |  C  |  D  |  A  |  B  |  (the visible part is the same
              (outside of screen)   | (visible) |   as the starting state)
                                    -------------
        layer: z-index.
        cycle: animation cycle in seconds. smaller cycle = faster sliding.
        key: unique id.
        mobile: true for sliding components such as moving landscapes. false for
            components staying in place, such as the robot.
        bottom: position.
    */
    images: string[];
    layer: number;
    cycle: number;
    key: number;
    mobile: boolean;
    bottom: string;
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
