
"use client"
import React from "react";
import ReactStars from "react-rating-stars-component";
import { ImLocation2 } from "react-icons/im";
import { LuUpload } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const page = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="grid grid-cols-12 col-span-12">
          <div className="col-span-8">
            <h1 className="text-5xl font-semibold flex items-center"><span className="mr-8">Hotel Excelsior Karachi</span>  <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4}
              size={30}
              activeColor="#F55D42"
            /></h1>
            <p className="flex items-center  mt-3"><ImLocation2 /> <span className="ml-2">Plot SB-21, Sarwar Shaheed Rd، opposite Atrium Mall،, Karachi, 75600, Pakistan</span></p>
          </div>
          <div className="col-span-4 flex justify-end">
            <LuUpload size={24} />
            <CiHeart size={24} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default page;
