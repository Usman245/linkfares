import React from "react";
import HotelsFilterDrawer from "./HotelsFilterDrawer";

const HotelsDisplayPage = () => {
  return (
    <div className="grid-cols-12  grid  ">
      <div className="col-span-3">
        <HotelsFilterDrawer />
      </div>
      <div className="col-span-4">
        
      </div>
      <div className="col-span-5"></div>
    </div>
  );
};

export default HotelsDisplayPage;
