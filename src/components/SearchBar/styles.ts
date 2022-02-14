import styled from "styled-components";
import { ThreeDotsVertical, Binoculars } from "@styled-icons/bootstrap/";

export const Part01 = styled.div`
  grid-area: SB1;
  display: flex;

  background: var(--search-area-background);
  color: var(--search-area-color);

  align-items: center;
  padding-left: 24px;
`;

export const Part02 = styled.div`
  grid-area: SB2;
  display: flex;

  background: var(--search-area-background);
  color: var(--search-area-color);

  align-items: center;
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: row;
  background: var(--search-area-input-background);
  width: 100%;
  padding: 2px 10px;

  border-radius: 6px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 8px;
  background: none;
  color: var(--search-area-input-color);

  &::placeholder {
    color: var(--search-area-input-placeholder);
  }
`;

export const Part03 = styled.div`
  grid-area: SB3;
  display: flex;

  background: var(--search-area-background);
  color: var(--search-area-color);

  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
`;

export const MenuIconContent = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 0px;

  transition: all 0.5s;

  &:hover {
    background: var(--search-area-background-button-hover);
    border-radius: 50%;
  }
`;

export const MenuIcon = styled(ThreeDotsVertical)`
  width: 20px;
`;

export const SearchIcon = styled(Binoculars)`
  width: 20px;
  color: var(--search-area-input-placeholder);
`;
