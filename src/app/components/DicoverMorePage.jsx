import React from "react";
import { Avatar } from "@nextui-org/react";


const DicoverMorePage = () => {
  return (
    <div className="p-4 rounded-xl drop-shadow-xl   bg-white">
      {" "}
      <div className="flex flex-col  gap-3">
        <div className="flex  gap-3 items-center">
          <Avatar
            src="/images/questionicon.png"
            className="w-20 h-20 flex justify-center items-center"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-black-16 font-roboto">
              Discover more hotels recommended by
            </h2>
            <div className="flex gap-2 items-center ">
              <button className="p-3 rounded-lg text-lg font-regular text-black flex justify-center items-center  border border-gray-CF">
                Families
              </button>

              <button className="p-3 rounded-lg text-lg font-regular text-black flex justify-center items-center border border-gray-CF">
                Business travellers
              </button>

              <button className="p-3 rounded-lg text-lg font-regular text-black flex justify-center items-center bg-green-600   border border-gray-CF">
                Couples
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicoverMorePage;
