import React from "react";
import styled from "styled-components";
import { Section } from "./Section";

export const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgImage="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgImage="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgImage="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgImage="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
