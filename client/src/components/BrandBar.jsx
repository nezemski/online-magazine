import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { AppContext } from "../context";
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {
  const { device } = useContext(AppContext);
  return (
    <Row
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {device.brands.map((brands) => (
        <Card
          onClick={() => device.setSelectedBrand(brands)}
          border={brands.id === device.selectedBrand?.id ? "danger" : "light"}
          style={{ cursor: "pointer" }}
          key={brands.id}
          className="p-3"
        >
          {brands.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
