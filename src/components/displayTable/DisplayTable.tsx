import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IDisplayTable } from "./DisplayTableInterface";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  margin-bottom: 10px;
`;

const TableHeadItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TableHeadeBlackText = styled.h4`
  color: #000000;
`;

const TableHeadGreyText = styled.h4`
  color: #e0e0e0;
`;

const TableBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableBodySingleEntry = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
`;

const TableBodyItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableBodyBlackText = styled.h4``;

const TableBodyGreyText = styled.h6`
  color: #e0e0e0;
  margin-left: 3px;
`;

const DisplayEmptyData = styled.h3`
  font-size: 16px;
  text-align: center;
`;

const DisplayTable: React.SFC<IDisplayTable> = (props) => {
  let Data: [] = [];
  //   let Data = ["1", "2", "3", "4", "5"];
  return (
    <Wrapper>
      {/* --------Table Head------------ */}
      <TableHeadWrapper>
        <TableHeadItemWrapper>
          <TableHeadeBlackText>Week</TableHeadeBlackText>
        </TableHeadItemWrapper>
        <TableHeadItemWrapper>
          <TableHeadGreyText>Humidity</TableHeadGreyText>
        </TableHeadItemWrapper>
        <TableHeadItemWrapper>
          <TableHeadGreyText>Temperature</TableHeadGreyText>
        </TableHeadItemWrapper>
        <TableHeadItemWrapper>
          <TableHeadGreyText>Description</TableHeadGreyText>
        </TableHeadItemWrapper>
      </TableHeadWrapper>

      {/* ------------Table Body---------- */}
      <TableBodyWrapper>
        {Array.isArray(Data) &&
          Data.length !== 0 &&
          Data.map((single, index) => {
            return (
              <TableBodySingleEntry key={index}>
                <TableBodyBlackText>Sunday</TableBodyBlackText>
                <TableBodyItemWrapper>
                  <FontAwesomeIcon icon={faCloud} size="sm" color="#b2edff" />
                  <TableBodyGreyText>54%</TableBodyGreyText>
                </TableBodyItemWrapper>
                <TableBodyItemWrapper>
                  <FontAwesomeIcon icon={faCloud} size="sm" color="#b2edff" />
                  <TableBodyGreyText>29C</TableBodyGreyText>
                </TableBodyItemWrapper>
                <TableBodyItemWrapper>
                  <FontAwesomeIcon icon={faCloud} size="sm" color="#b2edff" />
                  <TableBodyGreyText>Moderate Rain</TableBodyGreyText>
                </TableBodyItemWrapper>
              </TableBodySingleEntry>
            );
          })}
        {Array.isArray(Data) && Data.length === 0 && (
          <DisplayEmptyData>No Result</DisplayEmptyData>
        )}
      </TableBodyWrapper>
    </Wrapper>
  );
};

export default DisplayTable;
