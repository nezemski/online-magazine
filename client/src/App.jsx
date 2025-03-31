import "bootstrap/dist/css/bootstrap.min.css";

import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";

import Navbar1 from "./components/Navbar";
import { observer } from "mobx-react-lite";
import { AppContext } from "./context";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then(() => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar1 />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
