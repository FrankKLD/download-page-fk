import React from "react";
import { LoaderContent, Circle, Circles } from "./styles";

export interface Props {
  show: boolean;
}

const Loader: React.FC<Props> = ({ show }) => {
  return (
    <LoaderContent className={show ? "" : "DontShowIt"}>
      <Circles>
        <Circle />
        <Circle />
      </Circles>
      <Circles>
        <Circle />
        <Circle />
      </Circles>
    </LoaderContent>
  );
};

export default Loader;
