import styled from "styled-components";
import { Award, Badge3d, Badge8k } from "@styled-icons/bootstrap/";

export const Container = styled.div`
  grid-area: IA2;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--items-area-title);
  font-size: 14px;

  padding: 30px 0 15px;
`;

export const AboutIcon1 = styled(Award)`
  width: 16px;
  margin-right: 6px;
`;

export const AboutIcon2 = styled(Badge3d)`
  width: 16px;
  margin-right: 6px;
`;

export const AboutIcon3 = styled(Badge8k)`
  width: 16px;
  margin-right: 6px;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);

  background: var(--items-area-background);
  margin: 10px 0;
  width: 100%;
  transition: all 0.6s;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  }
`;

export const ItemImageContent = styled.div`
  display: flex;
  padding: 12px;
  border-right: 1px solid var(--items-image-border-limit);
`;

export const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--items-image-background);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  width: 100%;

  > h3 {
    text-transform: capitalize;
    color: var(--items-strong-title-color);
    font-weight: 100;
    font-size: 16px;
    margin: 8px 0;
  }

  > span {
    color: var(--items-strong-description-color);
    font-weight: 400;
    font-size: 12px;
    margin: 8px 0;
  }
`;

export const ItemDetailsButtonsContent = styled.div`
  display: flex;

  border-top: 1px solid var(--items-buttons-content-border);
  padding: 10px 0;
  margin-top: 12px;

  flex-direction: row;
  justify-content: flex-end;
`;

export const ItemButton = styled.input`
  background: var(--items-button-background);
  border: 1px solid var(--items-button-border);
  color: var(--items-button-color);
  padding: 6px 12px;

  border-radius: 6px;
  margin-left: 6px;
  cursor: pointer;
  transition: all 0.6s;

  &:hover {
    border: 1px solid var(--items-button-border-hover);
  }
`;

export const ItemButtonDefault = styled.input`
  background: var(--items-default-button-background);
  border: 1px solid var(--items-default-button-border);
  color: var(--items-default-button-color);
  padding: 6px 12px;

  border-radius: 6px;
  margin-left: 6px;
  cursor: pointer;
  transition: all 0.6s;

  &:hover {
    background: var(--items-default-button-background-hover);
    border: 1px solid var(--items-default-button-border-hover);
  }
`;
