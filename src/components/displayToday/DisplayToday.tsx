import React from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { IDisplayToday } from "./DisplayTodayInterface";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div``;

const Title = styled.h4`
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 2px;
  margin: 5px;
`;

const DateText = styled.h6`
  color: #ffffff;
  font-size: 12px;
  margin: 0 5px;
`;
// Displays Today and Date
const DisplayToday: React.SFC<IDisplayToday> = (props) => {
  const { day } = props;
  return (
    <Wrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faCloud} color="#b2edff" />
      </IconWrapper>
      <TextWrapper>
        <Title>Today</Title>
        <DateText>Friday, July 24</DateText>
      </TextWrapper>
    </Wrapper>
  );
};

export default DisplayToday;
