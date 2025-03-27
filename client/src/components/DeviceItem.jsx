import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Col md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
        <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
          <Image
            width={150}
            height={150}
            src={import.meta.env.VITE_API_URL + device.img}
          />
          <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div>Samsung...</div>
            <div className="d-flex align-items-center">
              <div>{device.rating}</div>
              <Image
                width={16}
                height={16}
                src="https://static-00.iconduck.com/assets.00/star-rating-icon-2048x2048-2k1x57ky.png"
              />
            </div>
          </div>
          <div>{device.name}</div>
        </Card>
      </Col>
    </div>
  );
};

export default DeviceItem;
