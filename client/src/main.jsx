import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

import { AppContext } from "./context";

createRoot(document.getElementById("root")).render(
  <AppContext.Provider
    value={{ user: new UserStore(), device: new DeviceStore() }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </AppContext.Provider>
);
