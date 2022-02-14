import styled, { keyframes } from "styled-components";

/* Loader by Frank Matos */

const rotate = keyframes`
to {
  transform: rotate(1turn);
}
`;

export const LoaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid var(--THEME_COLOR_007);
  border-top-color: var(--THEME_COLOR_001);

  animation: ${rotate} 2s infinite;
`;
