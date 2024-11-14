"use client"
import React from 'react'
import { PiCaretRightFill } from "react-icons/pi";
import { GrLocationPin } from "react-icons/gr";
import ReactStars from "react-rating-stars-component";
import { BsUpload } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Select, SelectItem } from "@nextui-org/react";
import { FaRegClock } from "react-icons/fa";
import { LiaChildSolid } from "react-icons/lia";
import { FaBed } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiSealWarningBold } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";


const page = () => {
  return (
    <div>
      <div className="hero py-5">
        <div className="container">
          <div className="inner_hero flex flex-col gap-5">
            <div className="breadcrup">
              <ul className='flex flex-wrap gap-2 items-center'>
                <li className='text-[#12B76A]'>Home</li>
                <li><PiCaretRightFill className='text-[#cccccc]' /></li>
                <li className='text-[#12B76A]'>Hotel</li>
                <li><PiCaretRightFill className='text-[#cccccc]' /></li>
                <li className='text-[#12B76A]'>Pakitan</li>
                <li><PiCaretRightFill className='text-[#cccccc]' /></li>
                <li className='text-[#12B76A]'>Karachi</li>
                <li><PiCaretRightFill className='text-[#cccccc]' /></li>
                <li className='text-[#626971]'>Hotel excior Karachi</li>
              </ul>
            </div>
            <div className="title_text grid items-center grid-cols-12 gap-3">
              <div className="inner_text md:col-span-10 col-span-12 flex flex-col gap-3 order-2 md:order-none">
                <h1 className='lg:text-5xl md:text-4xl sm:text-2xl xs:lg font-semibold flex items-center gap-3'>Hotel Excelsior Karachi   <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  value={4}
                  size={30}
                  activeColor="#F55D42"
                /></h1>
                <p className='flex items-center gap-2 text-sm md:text-base'><GrLocationPin className='text-2xl text-[#626971]' /> Plot SB-21, Sarwar Shaheed Rd، opposite Atrium Mall،, Karachi, 75600, Pakistan</p>
              </div>
              <div className="inner_icons md:col-span-2 col-span-12 flex justify-end gap-5 order-1 md:order-none">
                <BsUpload className='text-2xl text-[#010913]' />
                <FaRegHeart className='text-2xl text-[#010913]' />
              </div>
            </div>
            <div className="review_text grid items-center gap-5 grid-cols-12">
              <div className="rev flex gap-4 md:col-span-3 col-span-12">
                <div className="rev_rating text-sm">
                  <span className='text-4xl font-bold'>4.3</span>/5
                </div>
                <div className="rev_rating_text">
                  <p className='font-semibold'>Very Good</p>
                  <p className='text-[#626971]'>41 Reviews</p>
                </div>
              </div>
              <div className="rev_text md:col-span-9 col-span-12">
                <p className='shadow-md p-3 rounded-2xl text-sm'>
                  "After staying in several hotels in Saddar, we finally settled in Hotel Excelsior because it was fully booked until that date. The hotel was amazing, the
                  cleanliness, the breakfast had both Pakistani Breakfast and Continental breakfast also. The stay was very comfortable and the service was amazing as…
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery grid md:grid-cols-2 gap-1 mt-5 h-full">
          <div className="galleryP1">
            <img className='h-full w-full object-cover' src="/images/heros1.png" alt="hotel" />
          </div>
          <div className="galleryP2 grid grid-cols-12 gap-1">
            <div className="col-span-7 flex flex-col gap-1">
              <div className="singImage h-3/6">
                <img className='h-full w-full object-cover' src="/images/heros2.png" alt="hotel" />
              </div>

              <div className="doubleImage h-3/6 flex gap-1">
                <div className="inImag1">
                  <img className='h-full w-full object-cover' src="/images/heros-3.png" alt="hotel" />
                </div>
                <div className="inImag2">
                  <img className='h-full w-full object-cover' src="/images/heros-4.png" alt="hotel" />
                </div>
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-1">
              <div className="inImag1 h-2/5">
                <img className='h-full w-full object-cover' src="/images/heros-3.png" alt="hotel" />
              </div>
              <div className="inImag2c h-3/5">
                <img className='h-full w-full object-cover' src="/images/heros-4.png" alt="hotel" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* hotel Detail */}
      <div className="hotelDetail py-5">
        <div className="container">
          <div className="bg-[#EFF3F8] p-5 rounded flex flex-col gap-5">
            <div className="button grid grid-cols-12 gap-3 items-center">
              <div className="col-span-7 grid grid-cols-2 gap-3">
                <div className="range">
                  <Select
                    // size={size}
                    radius={"none"}
                    classNames={{
                      trigger: "bg-white p-[21px] min-h-0 h-0 border-2",
                    }}
                    label="Select an animal"
                    className="max-w-xs"
                  >
                  </Select>
                </div>
                <div className="selection">
                  <Select
                    // size={size}
                    radius={"none"}
                    classNames={{
                      trigger: "bg-white p-[21px] min-h-0 h-0 border-2",
                    }}
                    label="Select an animal"
                    className="max-w-xs"
                  >
                  </Select>
                </div>
              </div>
              <div className="col-span-5">
                <button className='bg-[#12B76A] py-[10px] px-[130px] rounded text-[#fff] w-max'>Search rooms and rates</button>
              </div>
            </div>






























            <div className="button_text">
              <div className="button flex flex-wrap items-center gap-3">
                <h5 className='font-semibold'>Filter by :</h5>
                <button className='border-2 w-max px-3 py-2 rounded-xl border'>Free cancellation</button>
                <button className='border-2 w-max px-3 py-2 rounded-xl border'>Breakfast included</button>
                <button className='border-2 w-max px-3 py-2 rounded-xl border'>Pay on arrival</button>
              </div>
            </div>
            <div className="detail_card flex flex-col gap-3">
              <p>Price per night including taxes and fees</p>
              <div className="card grid grid-cols-12 gap-5 rounded-lg bg-[#fff] p-5">
                <div className="lg:col-span-3 col-span-12">
                  <img className='h-full w-full object-cover rounded-lg' src="/images/heros-4.png" alt="hotel" />
                </div>
                <div className="lg:col-span-6 col-span-12 flex flex-col gap-2">
                  <div className="first">
                    <h6 className='font-semibold text-2xl text-[#434343]'>Delux Room</h6>
                    <p>2.2 km from Shahrah-e-Faisal</p>
                    <ul className='text-xs list-disc ml-3'>
                      <li>Non-refundable , Breakfast Included</li>
                    </ul>
                  </div>
                  <div className="second flex flex-col gap-3">
                    <h6 className='font-semibold text-[#434343]'>Comfort Room</h6>
                    <ul className='text-xs flex flex-col gap-1 list-disc ml-3'>
                      <li>1x King Size Bed</li>
                      <li>1x Bathroom</li>
                      <li>Cot available on request</li>
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <button className='border border-[#12b76a] text-[#12b76a] py-2 px-5 w-max rounded-3xl text-xs'>#Hotdeal</button>
                      <button className='border border-[#12b76a] text-[#12b76a] py-2 px-5 w-max rounded-3xl text-xs'>#Popular</button>
                      <button className='border border-[#12b76a] text-[#12b76a] py-2 px-5 w-max rounded-3xl text-xs'>#Bestmatch</button>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12 flex justify-between lg:flex-col md:flex-row gap-8 items-end">
                  <div className="flex flex-col">
                    <h6 className='font-semibold md:text-2xl text-lg text-[#434343]'>Rs : 20000</h6>
                    <div className="flex flex-col md:flex-row items-center md:gap-2 gap-0">
                      <span>5/5</span>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={4}
                        size={20}
                        activeColor="#F55D42"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>3 nights, 2 guest</p>
                    <button className='bg-[#12B76A] py-2 px-3 rounded text-[#fff] w-max'>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


       {/* timing  */}
       <div className="timing py-[50px]">
        <div className="container">
          <h3 className="sm:text-4xl text-2xl font-semibold">
            Check in and Check Out
          </h3>
          <div className="timer grid grid-cols-12 flex items-center mt-4">
            <div className="clock sm:col-span-2 col-span-2">
              <FaRegClock className="text-4xl" />
            </div>
            <div className="checkIn sm:col-span-3 col-span-5 flex flex-col gap-2">
              Check in From:
              <span className="font-bold text-lg">14:00</span>
            </div>
            <div className="checkOut sm:col-span-7 col-span-5 flex flex-col gap-2">
              Check out Before:
              <span className="font-bold text-lg">14:00</span>
            </div>
          </div>
          <h3 className="sm:text-3xl text-2xl font-semibold mb-4 mt-[60px]">
            Good to know
          </h3>
          <div className="GTN bg-[#f1f1f1] p-3 rounded">
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center mb-2">
                <LiaChildSolid className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Children</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 mb-2">
              <p>one</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <FaBed className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Additional beds</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
              <p>one</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <FaBed className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Available beds</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2 flex flex-col gap-3">
                <div className="ageLimit grid grid-cols-12 gap-2">
                  <div className="md:col-span-4 col-span-12 flex gap-5 items-center">
                    <span className="text-xs">Free</span>
                    <h6 className="font-bold  text-base">From 5 to 5 <br className="inlines" /> years old</h6>
                  </div>
                  <div className="md:col-span-8 col-span-12 md:mt-0 mt-3">
                    <p>For each room, 1 child can use existing beds for free.</p>
                  </div>
                </div>
                <div className="ageLimit grid grid-cols-12 gap-2">
                  <div className="md:col-span-4 col-span-12 flex gap-5 items-center">
                    <span className="text-xs">Pay</span>
                    <h6 className="font-bold text-base">From 6 to 17 years <br className="inlines" />
                      old</h6>
                  </div>
                  <div className="md:col-span-8 col-span-12 md:mt-0 mt-3">
                  <p>one</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <MdPets className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Pets</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
              <p>one</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <PiForkKnifeFill className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Breakfast</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2 flex flex-col gap-2">
              <p>one</p>
                <div className="ageLimit grid grid-cols-12 gap-2 border-b">
                  <div className="sm:col-span-5 col-span-12 flex gap-5 items-center">
                    <h6 className="font-bold  text-base">Breakfast menu</h6>
                  </div>
                  <div className="sm:col-span-7 col-span-12">
                  <p>one</p>
                  </div>
                </div>
                <div className="ageLimit grid grid-cols-12 gap-2 border-b">
                  <div className="sm:col-span-5 col-span-12 flex gap-5 items-center">
                    <h6 className="font-bold  text-base">Breakfast options</h6>
                  </div>
                  <div className="sm:col-span-7 col-span-12">
                  <p>one</p>
                  </div>
                </div>
                <div className="ageLimit grid grid-cols-12 gap-2">
                  <div className="sm:col-span-5 col-span-12 flex gap-5 items-center">
                    <h6 className="font-bold  text-base">Breakfast price</h6>
                  </div>
                  <div className="sm:col-span-7 col-span-12">
                  <p>one</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <PiSealWarningBold className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Important information from
                  the hotel</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
              <p>one</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <FaRegBuilding className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Important information about
                  the city</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
                <p>one</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <MdOutlinePayments className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Accepted payment methods</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
                <p>one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
