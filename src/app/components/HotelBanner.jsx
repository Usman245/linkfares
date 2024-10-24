"use client";
import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { MdOutlineKingBed } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";


const flighttabs = [
  {
    id: 1,
    name: "Flights",
    pic: <MdFlight color="white" style={{ transform: "rotate(50deg)" }} />,
  },
  {
    id: 2,
    name: "Hotels",
    pic: <MdOutlineKingBed color="white" />,
  },
  {
    id: 3,
    name: "Car Hire",
    pic: <FaCarSide color="white" />,
  },
  {
    id: 4,
    name: "Buses",
    pic: <FaBus color="white" />,
  },
  {
    id: 5,
    name: "Packages",
    pic: <TbPackages color="white" />,
  },
];

const HotelBanner = () => {
  const [startDate, setStartDate] = useState(new Date());
  return <div className="relative bg-[url('/images/hotel-bg.jpg')] bg-center bg-no-repeat bg-cover bg-blend-darken py-[100px] text-center">
    <div className="container">
      <div className="flex gap-2 flex-wrap  item-center justify-center">
        {flighttabs.map((item, index) => (
          <Link
            href="#"
            className={`flex gap-2 items-center  justify-center  py-[10px] px-4 rounded-[100px] border   border-gray-50   hover:bg-green-500 hover:border-opacity-0`}
            key={index}
          >
            <div>{item.pic}</div>

            <span className="font-roboto text-sm font-bold  text-white">
              {item.name}
            </span>
          </Link>
        ))}

      </div>
      <h1 className="my-[40px] text-4xl font-semibold">Find the right <span className="text-green-600">hotel today</span></h1>
      <div className="w-full bg-green-600 p-10 rounded">
        <form className="w-full">
          <div className="grid  grid-cols-1 md:grid-cols-12 gap-2 w-full">
            <div className=" col-span-12 md:col-span-12 lg:col-span-10  w-full">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-1  w-full ">

                <div className="lg:col-span-4 rounded-lg lg:rounded-none  lg:rounded-l-lg p-2 flex lg:justify-center  w-full  relative e">
                  <div className="flex flex-col justify-center ">
                    <label className=" font-roboto text-sm font-bold ">
                      Where do you want to stay?
                    </label>
                    <input
                      type="text"
                      className="p-2 w-full text-base  text-gray-71 "
                      placeholder="Enter destination or hotel name"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 rounded-lg lg:rounded-none   p-2 relative flex lg:justify-center">
                  <div className="flex flex-col  justify-center">
                    <label className=" font-roboto text-sm font-bold ">
                      Check
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="p-2  w-full text-base  text-gray-71 outline-none"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 rounded-lg lg:rounded-none   p-2 relative flex lg:justify-center">
                  <div className="flex flex-col  justify-center">
                    <label className=" font-roboto text-sm font-bold ">
                      Check Out
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="p-2 w-full text-base  text-gray-71 outline-none"
                    />
                  </div>
                </div>

                {/* //seclet */}
                <div className="lg:col-span-4 rounded-lg lg:rounded-none  lg:rounded-r-lg p-2 flex lg:justify-center">
                  <div className="flex flex-col  justify-center">
                    <label className=" font-roboto text-sm font-bold ">
                      Guests and rooms
                    </label>
                    <select id="countries" class="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                {/* //seclet */}
              </div>
            </div>

            {/* button */}
            <div className="col-span-12   md:col-span-12 lg:col-span-2">
              {" "}
              <Link href={"/Flights"}>
                <button
                  className=" px-[14px] py-3 w-full font-roboto text-sm font-bold text-white bg-green-500 hover:bg-green-700 rounded-lg h-full"
                  type="submit"
                >
                  Search
                </button>
              </Link>
            </div>
            {/* ENd button */}
          </div>
        </form>
      </div>
    </div>
  </div>
};

export default HotelBanner;
