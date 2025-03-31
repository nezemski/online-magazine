import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import { AppContext } from "./context";
import DeviceBasketStore from "./store/DeviceBasketStore";

createRoot(document.getElementById("root")).render(
  <AppContext.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
      deviceBasket: new DeviceBasketStore(),
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </AppContext.Provider>
);
