import React from "react";
import FlightFilter from "./FlightFilter";

const FlightsDiplayPage = () => {
  return (
    <div className="container">
      <div className="py-[80px]">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <FlightFilter />
          </div>
          <div className="col-span-8"></div>
        </div>
      </div>
    </div>
  );
};

export default FlightsDiplayPage;
