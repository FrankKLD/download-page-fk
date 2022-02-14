import styled from "styled-components";
/*
  SB - Search Bar
  IA - Items Content Area
*/
export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1.33fr 1.34fr 1.33fr;
  grid-template-rows: 56px 3fr;

  grid-template-areas:
    "SB1 SB2 SB3"
    "IA1 IA2 IA3";

  height: 100%;
`;
