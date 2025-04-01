import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchOneDevice } from "../http/deviceAPI";
import {
  createDeviceBasket,
  deleteDeviceBasket,
} from "../http/deviceBasketAPI";
const bigStar =
  "https://static-00.iconduck.com/assets.00/star-rating-icon-2048x2048-2k1x57ky.png";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });

  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  const handleAddDeviceBasket = () => {
    const formData = new FormData();
    formData.append("deviceId", device.id);
    createDeviceBasket(formData).then((response) => {
      setDevice((prevDevice) => {
        return {
          ...prevDevice,
          basket_devices: [response],
        };
      });
    });
  };

  const handleDeleteDeviceBasket = () => {
    if (!Array.isArray(device.basket_devices)) return;

    const first = device.basket_devices[0];

    deleteDeviceBasket(first.id).then(() => {
      setDevice((prevDevice) => {
        return {
          ...prevDevice,
          basket_devices: prevDevice.basket_devices.filter(
            (item) => item.id !== first.id
          ),
        };
      });
    });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={device.img ? import.meta.env.VITE_API_URL + device.img : null}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
            className="d-flex flex-column align-items-center justify-content-around"
          >
            <h3>От: {device.price} руб.</h3>

            <Button
              onClick={
                !device.basket_devices?.length
                  ? handleAddDeviceBasket
                  : handleDeleteDeviceBasket
              }
              variant={"outline-dark"}
            >
              {!device.basket_devices?.length
                ? "Добавить в корзину"
                : "Удалить из корзины" + ` (${device.basket_devices?.length})`}
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info) => (
          <Row
            key={info.id}
            style={{
              background: info.id % 2 === 0 ? "lightgray" : "transparant",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
