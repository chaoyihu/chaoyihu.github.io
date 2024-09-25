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
        width: for customizing width of immobile components.
    */
    images: string[];
    layer: number;
    mobile: boolean;
    bottom: string;
    key: number;
    cycle?: number;  // only if mobile is true
    width?: string;  // only if mobile is false
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
            {runnerDivs.map(({ images, layer, cycle, key, mobile, bottom, width }) => (
                <div className="runner-container" style={{ zIndex: layer, bottom: bottom}}>
                    {
                        mobile ? (
                            <RunnerSlider
                                images={images}
                                layer={layer}
                                mobile={mobile}
                                bottom={bottom}
                                key={key}
                                cycle={cycle}
                            >
                                {images.map((src, idx) => ( <img src={src} width="50%" key={idx}/> ))}
                                
                            </RunnerSlider> 
                        ) : (
                            <RunnerImmobile
                                images={images}
                                layer={layer}
                                mobile={mobile}
                                bottom={bottom}
                                key={key}
                                width={width}
                            >
                                {images.map((src, idx) => ( <img src={src} width={width} key={idx}/> ))}
                            </RunnerImmobile>
                        )
                    }
                </div>
            ))}
        </div>  
    );
};


export default Runner;
