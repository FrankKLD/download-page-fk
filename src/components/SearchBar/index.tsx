import React from "react";

import {
  FormArea,
  Input,
  MenuIcon,
  MenuIconContent,
  Part01,
  Part02,
  Part03,
  SearchIcon,
} from "./styles";

const SearchBar: React.FC = () => {
  return (
    <>
      <Part01>Downloads</Part01>
      <Part02>
        <FormArea>
          <SearchIcon />
          <Input autoFocus type="text" placeholder="Seach downloads" />
        </FormArea>
      </Part02>
      <Part03>
        <MenuIconContent>
          <MenuIcon />
        </MenuIconContent>
      </Part03>
    </>
  );
};

export default SearchBar;
