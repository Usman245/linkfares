import React from "react";
import HotelsFilterDrawer from "./HotelsFilterDrawer";
import HotelsListPage from "./HotelsListPage";
import DicoverMorePage from "./DicoverMorePage";

const HotelsDisplayPage = () => {
  return (
    <div className="grid-cols-12  grid  ">
      <div className="col-span-3">
        <HotelsFilterDrawer />
      </div>
      <div className="col-span-9">
        <div className="flex flex-col gap-3">
          <HotelsListPage />
          <DicoverMorePage />
        </div>
      </div>
    </div>
  );
};

export default HotelsDisplayPage;
