import styled from "styled-components";

export const SCStage = styled.div`
  margin: 10px;
  border: 1px solid blue;
  display: flex;
  margin: 0 auto;
  width: 90%;
  min-height: 500px;
  background: green;
  position: relative;
`;

export const SCHero = styled.div`
  border: 1px solid #000;
  overflow: hidden;
  height: 200px;
  width: 100px;
  position: fixed;
  background: #ffffff;
  will-change: left, top;
`;

export const SCIdiot = styled.div`
  border: 1px solid #ff0000;
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: absolute;
  will-change: left, top;
  font-size: 14px;
`;
