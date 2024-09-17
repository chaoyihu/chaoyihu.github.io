import React from 'react';
import styled, { keyframes } from 'styled-components';


export interface SpinnerImgProps {
  src: string;
  layer: number;
  cycle: number;
  angle: number;
  key: number;
}

interface SpinnerProps {
  SpinnerImgs: SpinnerImgProps[];
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


const Spinner: React.FC<SpinnerProps> = ({ SpinnerImgs }) => {

  const assembledSpinnerImgs = SpinnerImgs.map(spinnerImg => (
    <SpinnerImg
      src={spinnerImg.src}
      layer={spinnerImg.layer}
      cycle={spinnerImg.cycle}
      angle={spinnerImg.angle}
      key={spinnerImg.key}
    />
  ));

  return (
    <div className='spinner-container'>
      {assembledSpinnerImgs}
    </div>
  );
};

export default Spinner;