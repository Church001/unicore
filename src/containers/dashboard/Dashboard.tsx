import React from "react";
import styled from "styled-components";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import { IDisplayToday } from "../../components/displayToday/DisplayTodayInterface";
import DisplayToday from "../../components/displayToday/DisplayToday";
import DisplayTemperature from "../../components/displayTemperature/DisplayTemperature";
import DisplayReading from "../../components/displayReadings/DisplayReading";
import SearchInput from "../../UI/input/InputUI";
import DisplayTable from "../../components/displayTable/DisplayTable";
// import {} from "."

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2edff;

  @media (max-width: 1124px) {
    padding: 20px 0;
  }
`;

const WeatherWrapper = styled.div`
  width: calc(100% - 200px);
  height: 600px;
  display: flex;
  background-color: #f5f7e9e0;
  border-radius: 40px;

  @media (max-width: 1124px) {
    flex-direction: column;
    height: unset;
  }
`;

const WeatherTodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-radius: 0 40px 40px 0;
  padding: 30px;
  background-color: #141542;
  order: 2;
  @media (max-width: 1124px) {
    order: 1;
    border-radius: 0;
    border-radius: 40px 40px 0 0;
  }
`;

const WeatherOtherDaysWrapper = styled.div`
  flex-grow: 3;
  border-radius: 40px 0 0 40px;
  padding: 30px;
  background-color: inherit;
  order: 1;

  @media (max-width: 1124px) {
    order: 2;
    border-radius: 0;
    border-radius: 0 0 40px 40px;
  }
`;

const OtherWeatherParamsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
`;

const TitleAndSearchOtherDaysWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const WeatherOtherDaysTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const WeatherSearchWrapper = styled.div`
  width: 50%;
`;

const WeatherTableWrapper = styled.div`
  width: 100%;
`;

const Dashboard: React.SFC = () => {
  const weatherData = useSelector((state) => state);
  return (
    <Wrapper>
      <WeatherWrapper>
        <WeatherOtherDaysWrapper>
          <TitleAndSearchOtherDaysWrapper>
            <WeatherOtherDaysTitle>Weather Forecast</WeatherOtherDaysTitle>
            <WeatherSearchWrapper>
              <SearchInput />
            </WeatherSearchWrapper>
          </TitleAndSearchOtherDaysWrapper>
          <WeatherTableWrapper>
            <DisplayTable />
          </WeatherTableWrapper>
        </WeatherOtherDaysWrapper>

        {/* ------------- */}
        <WeatherTodayWrapper>
          <DisplayToday />
          <DisplayTemperature />
          <OtherWeatherParamsWrapper>
            <DisplayReading title="Humidity" icon={faCloud} value="54" />
            <DisplayReading title="Temperature" icon={faCloud} value="29C" />
            <DisplayReading
              title="Description"
              icon={faCloud}
              value="Moderate Rain"
            />
          </OtherWeatherParamsWrapper>
        </WeatherTodayWrapper>

        {/* -----------End------------ */}
      </WeatherWrapper>
    </Wrapper>
  );
};

export default Dashboard;
