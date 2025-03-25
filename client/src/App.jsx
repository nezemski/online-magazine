import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";

import Navbar1 from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
