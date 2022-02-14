import React from "react";
import { Circle, LoaderContent } from "./styles";
export interface Props {
  show: boolean;
}

const LoaderCirle: React.FC<Props> = ({ show }) => {
  return (
    <LoaderContent className={show ? "" : "DontShowIt"}>
      <Circle />
    </LoaderContent>
  );
};

export default LoaderCirle;
