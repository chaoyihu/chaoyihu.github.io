import React from 'react';
import styled, { keyframes } from 'styled-components';


const reveal = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100vh);
  }
`;

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('/images/overlay.webp') no-repeat center center;
  background-size: cover;
  animation: ${reveal} 3s ease-out forwards;
  animation-delay: 0.5s;
  z-index: 999;
`;


const Overlay = () => {
  return (
    <Block />
  );
};

export default Overlay;