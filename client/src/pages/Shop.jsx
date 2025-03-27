import React, { useContext, useEffect } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";

import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { AppContext } from "../context";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(AppContext);

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data);
      device.setSelectedType(data[0]);
    });
    fetchBrands().then((data) => {
      device.setBrands(data);
      device.setSelectedBrand(data[1]);
    });
  }, []);

  useEffect(() => {
  

    let isValid = true;

    if (
      !device.selectedType.id ||
      !device.selectedBrand.id ||
      !device.page ||
      !device.limit
    ) {
      return;
    }
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      device.limit
    ).then((data) => {
      if (isValid) {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      }
    });

    return () => {
      isValid = false;
    };
  }, [
    device.selectedType.id,
    device.selectedBrand.id,
    device.page,
    device.limit,
  ]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9} className="d-flex flex-column gap-3">
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
