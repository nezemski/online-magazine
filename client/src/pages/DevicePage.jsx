import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const bigStar =
  "https://static-00.iconduck.com/assets.00/star-rating-icon-2048x2048-2k1x57ky.png";

const DevicePage = () => {
  const device = {
    id: 2,
    name: "Iphone 12 Pro",
    price: 50000,
    rating: 4.9,
    img: "https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro/6335c378162da522ea6f4d1663f75220-2272x3112.jpg.webp",
  };
  const description = [
    {
      id: 1,
      title: "Оперативная память",
      description: "6гб",
    },
    {
      id: 2,
      title: "Камера",
      description: "12 мп",
    },
    {
      id: 3,
      title: "Процессор",
      description: "Пентиум 3",
    },
    {
      id: 4,
      title: "Кол-во ядер",
      description: "2",
    },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
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
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info) => (
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
