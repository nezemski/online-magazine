import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import DeviceStore from "../store/DeviceStore";
import { AppContext } from "../context";

const Pages = observer(() => {
  const { device } = useContext(AppContext);
  const pagesCount = Math.ceil(device.totalCount / device.limit);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
