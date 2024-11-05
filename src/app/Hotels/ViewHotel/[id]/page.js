
"use client"
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { LuUpload } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Select, SelectItem } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import { FaRegClock } from "react-icons/fa";

const hotelViewContent = {
  range: [
    { label: "1 adult 1 room" },
    { label: "2 adult 1 room" },
    { label: "3 adult 1 room" },
    { label: "4 adult 1 room" },
    { label: "5 adult 1 room" },
    { label: "6 adult 1 room" },
  ],

  button: [
    { title: "Free cancellation" },
    { title: "Breakfast included" },
    { title: "Pay on arrival" },
  ]
}




const page = () => {
  return (
    <div className="main py-5">
      <div className="container">
        <div className="grid grid-cols-12 col-span-12 flex items-center">
          <div className="xl:col-span-8 col-span-10 flex flex-col md:gap-2 gap-1">
            <h1 className="font-semibold flex items-center"><span className="mr-8 xl:text-5xl md:text-4xl text-2xl ">Hotel Excelsior Karachi</span>  <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4}
              size={28}
              activeColor="#F55D42"
            /></h1>
            <p className="flex items-center sm:mt-1"><ImLocation2 /> <span className="ml-2 xl:text-base xs:text-sm">Plot SB-21, Sarwar Shaheed Rd، opposite Atrium Mall،, Karachi, 75600, Pakistan</span></p>
          </div>
          <div className="xl:col-span-4 col-span-2 flex justify-end">
            <LuUpload size={24} className="mr-3" />
            <CiHeart size={24} />
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-12 col-span-12 flex items-center mt-5 flex gap-2">
          <div className="col-span-12 xl:col-span-2 md:col-span-3 flex items-end gap-4">
            <div>
              <span className="text-4xl font-bold">43</span>
              <span>/5</span>
            </div>
            <span className="mt-3">
              <h5 className="font-semibold">Very good</h5>
              <p className="text-sm">41 reviews</p>
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
        <div className="servies bg-[#EFF3F8] rounded-lg p-4">
          {/* //range */}
          <div className="service_header grid grid-cols-12 col-span-12 flex justify-center">
            <div className="col-span-12 xl:col-span-4">
              <DateRangePicker
                label=""
                isRequired
                defaultValue={{
                  start: parseDate("2024-04-01"),
                  end: parseDate("2024-04-08"),
                }}
                className="max-w-xs"
                classNames={
                  {
                    inputWrapper: ""
                  }
                }
              />
            </div>
            <div className="col-span-12 xl:col-span-4">
              <Select
                label="Select an animal"
                className="max-w-xs w-full"
                radius="none"

              >
                {hotelViewContent.range.map((items) => (
                  <SelectItem key={items.key}>
                    {items.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="col-span-12 xl:col-span-4">
              <button className="bg-[#12B76A] rounded-lg py-3 px-[100px] text-white font-semibold">Search Room And Rates</button>
            </div>
          </div>

          {/* buttons */}
          <div className="button my-5 grid-cols-12 col-span-12 flex gap-3 items-center flex-wrap">
            <div className="col-span-2">
              <h1 className="font-semibold">Filter by</h1>
            </div>
            <div className="col-span-10 flex gap-2 flex-wrap">
              {
                hotelViewContent.button.map((content, index) => (
                  <button key={index} className="border rounded-lg w-full xs:w-max shadow py-2 px-[16px]">
                    {content.title}
                  </button>
                ))
              }

            </div>
          </div>

          {/* card details */}
          <div className="detail">
            <p>Price per night including taxes and fees</p>
            <div className="grid grid-cols-12 col-span-12 bg-white rounded-lg flex items-center p-[15px] mt-4">
              <div className="grid grid-cols-12 flex gap-5 items-center lg:col-span-10 md:col-span-8 col-span-12">
                <div className="img lg:col-span-3 md:col-span-5 col-span-12 h-full">
                  <img className="rounded-2xl h-full w-full object-cover" src="/images/industries.jpg" alt="hotel" />
                </div>
                <div className="bookingDetail lg:col-span-9 md:col-span-7 col-span-12 col-span-12 flex gap-2 flex-col">
                  <h6 className="font-semibold">Deluxe Room</h6>
                  <div className="text-sm">
                    <p>2.2 km from Shahrah-e-Faisal</p>
                    <ul className="list-disc ml-3">
                      <li>Non-refundable , Breakfast Included</li>
                    </ul>
                  </div>
                  <h6 className="font-semibold" >Deluxe Room</h6>
                  <div className="text-sm">
                    <ul className="list-disc ml-3">
                      <li>Non-refundable , Breakfast Included</li>
                      <li>Non-refundable , Breakfast Included</li>
                      <li>Non-refundable , Breakfast Included</li>
                    </ul>
                  </div>
                  <button className="border border-[#12b76a] text-[#12b76a] rounded-full xs:w-max py-1 px-4">
                    hello world
                  </button>

                </div>
              </div>
              <div className="lg:col-span-2 md:col-span-4 col-span-12 flex md:flex-col flex-row justify-between gap-5 md:items-end items-center md:mt-0 mt-5">
                <div>
                  <h3 className="font-bold text-2xl">Rs 20,670</h3>
                  <div className="starsRatingss flex items-center gap-2 text-sm">
                    <span>5/5</span>
                    <span>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={4}
                        size={20}
                        activeColor="#ffd700"
                      />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm">3night, 2guest</p>
                  <button className="border rounded-lg w-full xs:w-max bg-[#12b76a] py-2 px-[16px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* timing  */}
      <div className="timing py-[50px]">
        <div className="container">
          <h1 className="sm:text-4xl xs:text-2xl font-semibold">Check in and Check Out</h1>
          <div className="timer grid grid-cols-12 flex gap-16 items-center mt-4">
            <div className="clock sm:col-span-2 col-span-12">
              <FaRegClock className="text-4xl" />
            </div>
            <div className="checkIn sm:col-span-3 col-span-6  flex flex-col gap-2">
              Check in From:
              <span className="font-bold text-lg">14:00</span>
            </div>
            <div className="checkOut sm:col-span-7 col-span-6 flex flex-col gap-2">
              Check out Before:
              <span className="font-bold text-lg">14:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default page;
