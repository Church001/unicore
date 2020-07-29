import React from "react";

import { IDisplayTemperature } from "./DisplayTemperatureInterface";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const TemperatureWrapper = styled.div`
  display: flex;
`;

const TemperatureValue = styled.h1`
  color: #ffffff;
  font-size: 80px;
  margin: 0;
`;

const TemperatureC = styled.h6`
  color: #ffffff;
  margin: 10px 0;
  font-size: 18px;
`;

const TemperatureIcon = styled.span`
  color: #ffffff;
  margin: 0;
`;

const TemperatureSymbolWrapper = styled.div`
  display: flex;
`;

const CityTextWrapper = styled.h6`
  font-size: 12;
  color: #ffffff;
  margin: 10px;
`;

const DisplayTemperature: React.SFC<IDisplayTemperature> = (props) => {
  const { city, country, temperature } = props;
  return (
    <Wrapper>
      <TemperatureWrapper>
        <TemperatureValue>29</TemperatureValue>
        <TemperatureSymbolWrapper>
          <TemperatureIcon>o</TemperatureIcon>
          <TemperatureC>C</TemperatureC>
        </TemperatureSymbolWrapper>
      </TemperatureWrapper>
      <CityTextWrapper>Cotonou, Benin</CityTextWrapper>
    </Wrapper>
  );
};

export default DisplayTemperature;
