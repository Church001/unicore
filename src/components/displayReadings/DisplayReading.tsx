import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IDisplayReading } from "./DisplayReadingInterface";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h6`
  color: #ffffff;
  font-size: 12px;
  margin: 8px;
`;

const IconValueWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div``;

const Text = styled.h2`
  color: #ffffff;
  font-size: 20px;
  margin: 0 10px;
  width: 80px;
`;

const DisplayReading: React.SFC<IDisplayReading> = (props) => {
  const { icon, title, value } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <IconValueWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={icon} color="#b2edff" size="2x" />
        </IconWrapper>
        <Text>{value}</Text>
      </IconValueWrapper>
    </Wrapper>
  );
};

export default DisplayReading;
