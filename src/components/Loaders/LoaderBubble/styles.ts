import styled, { keyframes } from "styled-components";

/* Loader by Frank Matos */

const grow = keyframes`
  50% {
    transform: scale(1);
  }
`;

export const LoaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
`;

export const Circle = styled.div`
  object-fit: unset;
  display: inline-block;
  background: var(--THEME_COLOR_003);
  height: 10px;
  width: 10px;
  animation: ${grow} 1.5s linear infinite;
  transform: scale(0);
  border-radius: 50%;

  &:nth-child(2) {
    background: var(--THEME_COLOR_001);
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    background: var(--THEME_COLOR_003);
    animation-delay: 1s;
  }
`;
