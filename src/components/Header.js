import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

export const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  function oneClickCustomMenu() {
    setBurgerStatus(true);
  }

  function onClickCustomClose() {
    setBurgerStatus(false);
  }

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={oneClickCustomMenu} />
      </RightMenu>
      <BurgerNav value={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={onClickCustomClose} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index} href="#">
              <a>{car}</a>
            </li>
          ))}
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-In</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a { 
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.value ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
