import React from "react";
import HotelsFilterDrawer from "./HotelsFilterDrawer";
import HotelsListPage from "./HotelsListPage";

const HotelsDisplayPage = () => {
  return (
    <div className="grid-cols-12  grid  ">
      <div className="col-span-3">
        <HotelsFilterDrawer />
      </div>
      <div className="col-span-9">
        <HotelsListPage />
      </div>
    </div>
  );
};

export default HotelsDisplayPage;
