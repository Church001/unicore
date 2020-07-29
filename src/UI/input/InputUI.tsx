import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IInputProps } from "./InputUIInterface";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  border-bottom: #2d74da;
  position: relative;
  display: flex;
  align-items: center;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  border: 0.5px solid #e0e0e0;
  padding-left: 20%;

  ::placeholder {
    text-align: center;
    color: #e0e0e0;
  }

  &:focus {
    outline: 0.5px solid transparent;
  }

  ::text {
    color: #e0e0e0;
  }
`;

const SearchIconWrapper = styled.span`
  position: absolute;
  left: 15px;
`;

const SearchInput = (props: IInputProps) => {
  return (
    <Wrapper>
      <SearchIconWrapper>
        <FontAwesomeIcon icon={faSearch} color="#e0e0e0" />
      </SearchIconWrapper>
      <CustomInput placeholder="Search New Places" />
    </Wrapper>
  );
};

export default SearchInput;
