"use client";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TbCheckbox } from "react-icons/tb";

const stopData = [
  {
    id: 1,
    ctitle: "Direct",
    csuubtitle: "from 14,183 kč",
  },
  {
    id: 2,
    ctitle: "1 Stop",
    csuubtitle: "from 14,183 kč",
  },
  {
    id: 3,
    ctitle: "Direct",
    csuubtitle: "from 14,183 kč",
  },
];

const FlightFilter = () => {
  const [checkedItems, setCheckedItems] = useState({});

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the checked state based on the id
    }));
  };
  return (
    <div className="flex flex-col gap-[15px] ">
      <div className="flex flex-col gap-[17px] ">
        <div className="flex flex-col gap-3">
          <p className="font-poppins  text-lg text-gray-4B  font-medium">
            Filters
          </p>
          <div className="grid grid-cols-2 w-max gap-3">
            <button className="py-[4px] px-[23px] flex justify-center gap-2 items-center border border-gray-4B rounded-[20px]  border-2">
              <p className="text-[10px] font-roboto font-regular text-gray-4B ">
                Direct{" "}
              </p>

              <RxCrossCircled color="#4B4B4B" width={6} />
            </button>

            <button className="py-[4px] px-[23px] flex justify-center gap-2 items-center border border-gray-4B rounded-[20px]  border-2">
              <p className="text-[10px] font-roboto font-regular text-gray-4B ">
                Outbound{" "}
              </p>

              <RxCrossCircled color="#4B4B4B" width={6} />
            </button>

            <button className="py-[4px] px-[23px] flex justify-center gap-2 items-center border border-gray-4B rounded-[20px]  border-2">
              <p className="text-[10px] font-roboto font-regular text-gray-4B ">
                03 hours{" "}
              </p>

              <RxCrossCircled color="#4B4B4B" width={6} />
            </button>

            <button className="py-[4px] px-[23px] flex justify-center gap-2 items-center border border-gray-4B rounded-[20px]  border-2">
              <p className="text-[10px] font-roboto font-regular text-gray-4B ">
                Delete All{" "}
              </p>

              <RxCrossCircled color="#4B4B4B" width={6} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <p className="font-poppins  text-lg text-gray-4B  font-medium">
            Stops
          </p>
          <div className="flex flex-col gap-2">
            {stopData.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div>
                  <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    className="hidden peer"
                    checked={checkedItems[item.id] || false} // Use the id to track state
                    onChange={() => handleCheckboxChange(item.id)} // Handle change
                  />

                  <label
                    htmlFor={`checkbox-${item.id}`}
                    className="cursor-pointer peer-checked:text-green-600 p-2 relative"
                  >
                    <TbCheckbox size={24} />
                  </label>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-lg font-regular font-roboto">
                    {item.ctitle}
                  </p>
                  <p className="text-sm font-regular font-roboto">
                    {item.csuubtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr class="my-[24px] h-0.5 border-t-0 bg-gray-D9 " />

      <div className="flex flex-col gap-[16px] ">
        <p className="font-poppins  text-[20px] text-gray-4B  font-medium">
          Departure times
        </p>
        <div className="flex flex-col  gap-12"></div>
      </div>
    </div>
  );
};

export default FlightFilter;
