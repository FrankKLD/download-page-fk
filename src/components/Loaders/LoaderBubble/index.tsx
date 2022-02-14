import React from "react";
import { LoaderContent, Circle } from "./styles";

export interface Props {
  show: boolean;
}

const Loader: React.FC<Props> = ({ show }) => {
  return (
    <LoaderContent className={show ? "" : "DontShowIt"}>
      <Circle />
      <Circle />
      <Circle />
    </LoaderContent>
  );
};

export default Loader;
