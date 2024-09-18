import React from 'react';
import styled, { keyframes } from 'styled-components';


export interface SpinnerImgProps {
    src: string;  // spinner image source
    layer: number;  // z-index of this spinner image
    cycle: number;  // animation cycle in seconds. smaller cycle = faster spinning
    angle: number;  // rotation angle for one cycle, +359 or -359
    key: number;  // the key (id) for each element
}

interface SpinnerProps {
    spinnerImgs: SpinnerImgProps[];
}

const rotate = (angle: number) => keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(${angle}deg);
    }
`;

const SpinnerImg = styled.img<SpinnerImgProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    animation: ${props => rotate(props.angle)} ${props => props.cycle}s infinite linear;
    z-index: ${props => props.layer};
`;


const Spinner: React.FC<SpinnerProps> = ({ spinnerImgs }) => {
    return (
        <div className="spinner-container">
            {
                spinnerImgs.map(img => (
                    <SpinnerImg
                        src={img.src}
                        layer={img.layer}
                        cycle={img.cycle}
                        angle={img.angle}
                        key={img.key}
                    />
                ))
            }
        </div>
    );
};

export default Spinner;