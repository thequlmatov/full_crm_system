import React from "react";
import { Body, Container, Side, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export const Sidebar = () => {
  return (
    <Container>
      <Side>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
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
