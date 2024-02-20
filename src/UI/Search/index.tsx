import { FC, useRef } from "react";

import searchIcon from "@/assets/icons/search.svg";

import { Input, SearchContainer, SearchIcon } from "./styled";
import { TSearchProps } from "./types";

const Search: FC<TSearchProps> = ({ placeholder = "Search Twitter" }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <SearchContainer onClick={focusInput}>
      <SearchIcon src={searchIcon} />
      <Input type="text" placeholder={placeholder} ref={inputRef} />
    </SearchContainer>
  );
};

export default Search;
