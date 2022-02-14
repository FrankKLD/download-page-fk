import React from "react";
import ItemsArea from "../../components/ItemsArea";
import SearchBar from "../../components/SearchBar";
import GlobalStyles from "../../Styles/GlobalStyles";

import { Grid } from "./styles";

const Default: React.FC = () => {
  return (
    <>
      <Grid>
        <SearchBar />

        <ItemsArea />
      </Grid>
      <GlobalStyles />
    </>
  );
};

export default Default;
