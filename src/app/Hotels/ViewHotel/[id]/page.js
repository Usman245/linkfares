
"use client"
import React from "react";
import ReactStars from "react-rating-stars-component";
import { ImLocation2 } from "react-icons/im";
import { LuUpload } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Select, SelectItem } from "@nextui-org/react";

const range = [
  { label: "1 adult 1 room" },
  { label: "2 adult 1 room" },
  { label: "3 adult 1 room" },
  { label: "4 adult 1 room" },
  { label: "5 adult 1 room" },
  { label: "6 adult 1 room" },
]


const page = () => {
  return (
    <div className="main py-5">
      <div className="container">
        <div className="grid grid-cols-12 col-span-12 flex items-center">
          <div className="col-span-8">
            <h1 className="font-semibold flex items-center"><span className="mr-8 xl:text-5xl lg:text-3xl md:text-2xl xs:text-xl">Hotel Excelsior Karachi</span>  <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4}
              size={28}
              activeColor="#F55D42"
            /></h1>
            <p className="flex items-center mt-3 sm:mt-1"><ImLocation2 /> <span className="ml-2 xl:text-base xs:text-sm">Plot SB-21, Sarwar Shaheed Rd، opposite Atrium Mall،, Karachi, 75600, Pakistan</span></p>
          </div>
          <div className="col-span-4 flex justify-end">
            <LuUpload size={24} className="mr-3" />
            <CiHeart size={24} />
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-12 col-span-12 flex items-center mt-5">
          <div className="col-span-12 xl:col-span-2 md:col-span-3 flex">
            <div>
              <span className="text-4xl font-bold">43</span>
              <span>/5</span>
            </div>
            <span className="ml-3">
              <h5 className="font-semibold">Very good</h5>
              <p className="text-xs">41 reviews</p>
            </span>
          </div>
          <div className="col-span-12 xl:col-span-10 md:col-span-9 md:mt-0 xs:mt-5 rounded-2xl  shadow p-3 rounded">
            <p className="text-base leading-[20px]">"After staying in several hotels in Saddar, we finally settled in Hotel Excelsior because it was fully booked until that date. The hotel was amazing, the
              cleanliness, the breakfast had both Pakistani Breakfast and Continental breakfast also. The stay was very comfortable and the service was amazing as…</p>
          </div>
        </div>
      </div>
      {/* banner gallery */}
      <div className="media grid grid grid-cols-12 col-span-12 flex my-5">
        <div className="col-span-5">
          <img className="border-r-2 object-cover w-full h-full" src="/images/industries.jpg" alt="" />
        </div>
        <div className="col-span-4">
          <div>
            <img className="border-r-2 object-cover w-full h-full" src="/images/industries.jpg" alt="" />
          </div>
          <div className="flex">
            <div>
              <img className="border border-t-2 border-r-2" src="/images/industries.jpg" alt="" />
            </div>
            <div>
              <img className="border border-t-2 border-r-2" src="/images/industries.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div>
            <video className="object-cover w-full h-full" width="360" height="240" controls>
              <source src="movie.mp4" type="video/mp4" />
            </video>
            <img className="border border-t-2 object-cover w-full h-full" src="/images/industries.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* serives */}
      <div className="container">
        <div className="servies bg-[#000] p-4">
          {/* //range */}
          <div className="service_header flex justify-between flex-wrap">
            <DateRangePicker
              label=""
              isRequired
              defaultValue={{
                start: parseDate("2024-04-01"),
                end: parseDate("2024-04-08"),
              }}
              className="max-w-xs"
            />

            <Select
              label="Select an animal"
              className="max-w-xs w-full"
            >
              {range.map((items) => (
                <SelectItem key={items.key}>
                  {items.label}
                </SelectItem>
              ))}
            </Select>

            <button className="bg-[#12B76A] rounded-xl py-3 px-[140px] text-white font-semibold">Search Room And Rates</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default page;
