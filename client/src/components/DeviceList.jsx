import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { AppContext } from "../context";
import DeviceItem from "./DeviceItem";
import { Row } from "react-bootstrap";

const DeviceList = observer(() => {
  const { device } = useContext(AppContext);
  return (
    <Row
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {device.devices.map((devices) => (
        <DeviceItem key={devices.id} device={devices} />
      ))}
    </Row>
  );
});

export default DeviceList;
