import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value }).then(() => {
      setValue("");
      onHide();
    });
  };
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Ведите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
