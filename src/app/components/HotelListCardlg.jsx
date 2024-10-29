import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const HotelListCardlg = () => {
  return (
    <div className="grid  grid-cols-12 rounded-2xl  drop-shadow-lg bg-white">
      <div className="col-span-3">
        <img
          src="/images/hotellist.png"
          className="object-fill rounded-l-lg  w-full h-full"
        />
      </div>
      <div className="col-span-7">
        <div className="p-2 ">
          <div className="flex flex-col  gap-[56px]">
            <div>
              <div className=" flex gap-2  justify-between items-start pb-3 ">
                <h3 className="text-xl font-bold  text-black-16 leading-0">
                  Vintage Grand Hotel - Formerly Ghaya Grand Hotel
                </h3>

                <div>
                  <FaRegHeart size={24} />
                </div>
              </div>

              <div>
                <ReactStars
                  count={5}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>
              <p className="text-lg font-regular text-black-16  pb-[12px]">
                1.59 km from Union
              </p>

              <div className="flex gap-1 items-center">
                <p className="text-sm font-semibold ">5.0</p>
                <div>
                  <ReactStars
                    count={5}
                    // onChange={ratingChange}
                    emptyIcon={<FaRegCircle color="#12B76A" />}
                    filledIcon={<FaCircle color="#12B76A" />}
                    value={2}
                    size={14}
                    activeColor="#FFA033"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-regular text-gray-4B">4206,</p>
                  <p className="text-xs font-regular text-gray-4B">Reviews</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-regular text-black-16">Best</p>
                  <div>
                    <FaExternalLinkAlt />
                  </div>
                </div>
                <p className="text-lg font-bold  text-black-16 ">RS 19,407</p>
              </div>

              <div className="flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-regular text-black-16">Best</p>
                  <div>
                    <FaExternalLinkAlt />
                  </div>
                </div>
                <p className="text-lg font-bold  text-black-16 ">RS 19,407</p>
              </div>
              <div className="flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-regular text-black-16">Best</p>
                  <div>
                    <FaExternalLinkAlt />
                  </div>
                </div>
                <p className="text-lg font-bold  text-black-16 ">RS 19,407</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2   ">
        <div className="p-2  relative  h-full">
          <div className="flex flex-col gap-2 font-roboto justify-center  ">
            <h2 className="text-xl font-bold">RS 20,796</h2>
            <p>a night</p>
          </div>

          <div className="absolute  mb-2 mr-2 bottom-0  left-0  w-full ">
            <button className="py-2 px-2 rounded-lg  flex justify-center items-center bg-green-600 text-white w-full ">
              Go to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListCardlg;
