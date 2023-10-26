import React from "react";
import styled from "styled-components";

export const Section = (props) => {
  return (
    <Wrap bgImage={props.bgImage}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          <RightButton>{props.rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
`;

const ItemText = styled.div`
  padding-top: 15vh;
  z-index: 10;
  text-align: center;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 20px;
`;
