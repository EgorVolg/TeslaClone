import React from "react";
import styled from "styled-components";
import { Section } from "./Section";

export const Home = ({carinfo}) => {
  return (
    <Container>
        {carinfo.map((el)=>(
            <Section
                title={el.title}
                id={el.id}
                description={el.description}
                bgImage={el.image}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
        ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
