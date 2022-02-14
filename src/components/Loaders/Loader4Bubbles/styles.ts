import styled, { keyframes } from "styled-components";

/* Loader by Frank Matos */

const rotate = keyframes`
to {
  transform: rotate(2turn);
}
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  height: 50px;

  animation: ${rotate} 2s infinite;
`;

export const Circles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  margin: 2px;

  &:nth-child(2) {
    flex-direction: row-reverse;
  }
`;

export const Circle = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  background: var(--THEME_COLOR_007);
  margin: 2px;
  border-radius: 50%;

  &:nth-child(1) {
    background: var(--THEME_COLOR_001);
    animation-delay: 0.5s;
  }
`;
