import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/esm/Button";
import { observer } from "mobx-react-lite";
import { AppContext } from "../context";

const Navbar1 = observer(() => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          ПриколюхиУНастюхи
        </NavLink>
        {user.isAuth ? (
          <Nav className="d-flex gap-2" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default Navbar1;
