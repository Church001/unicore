import React from "react";
import styled from "styled-components";

const FallbackUIWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const FallbackUIText = styled.h5`
  font-size: 16px;
  color: #2d74da;
`;

const FallbackUI = () => {
  return (
    <FallbackUIWrapper>
      <FallbackUIText>loading...</FallbackUIText>
    </FallbackUIWrapper>
  );
};

export default FallbackUI;
