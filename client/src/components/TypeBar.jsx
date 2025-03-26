import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { AppContext } from "../context";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { device } = useContext(AppContext);
  console.log(device.selectedType);

  return (
    <ListGroup className="mt-2">
      {device.types.map((type) => {
        return (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            key={type.id}
            active={type.id === device.selectedType?.id}
            onClick={() => device.setSelectedType(type)}
          >
            {type.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default TypeBar;
