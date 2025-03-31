import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { fetchDeviceBasket } from "../http/deviceAPI";
import { observer } from "mobx-react-lite";
import DeviceItem from "../components/DeviceItem";

const Basket = observer(() => {
  const { deviceBasket } = useContext(AppContext);

  useEffect(() => {
    fetchDeviceBasket().then((data) => deviceBasket.setDeviceBasket(data));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {deviceBasket._deviceBasket.map?.((deviceBasketItem) => {
        const { device } = deviceBasketItem;
        return <DeviceItem device={device} />;
      })}
    </div>
  );
});

export default Basket;
