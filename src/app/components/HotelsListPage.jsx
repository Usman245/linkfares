import React from "react";
import { Tabs, Tab, Chip } from "@nextui-org/react";

const HotelsListPage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between items-center">
          <h4 className="font-poppins text-black-16 font-medium ">
            All taxes and fees included  |  971 results
          </h4>
          <p className="text-lg font-bold font-roboto text-green-600">
            Learn more about price changes
          </p>
        </div>

        <div className="flex flex-col "></div>
      </div>
    </div>
  );
};

export default HotelsListPage;
