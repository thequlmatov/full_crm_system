import React from "react";
import { Body, Container, Logo, LogOut, Side, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export const Sidebar = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <Container>
      <Side onClick={onClickLogo}>
        <Logo>Webbrain.crm</Logo>
        <LogOut>Chiqish</LogOut>
      </Side>

      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
