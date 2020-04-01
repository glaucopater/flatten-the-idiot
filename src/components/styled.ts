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
  height: 100px;
  position: fixed;
  will-change: left, top;
  display: flex;
`;

export const SCHeroImage = styled.img`
  width: 100px;
  height: auto;
`;

export const SCIdiot = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: absolute;
  will-change: left, top;
  font-size: 36px;
`;

export const SCFlame = styled.div`
  width: 24px;
  height: 24px;
  font-size: 14px;
  > img {
    z-index: 1000;
  }
`;

export const SCFlameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  width: 100px;
  z-index: 100;
`;
