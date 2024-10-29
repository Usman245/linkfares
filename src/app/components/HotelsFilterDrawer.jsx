import React from "react";
import { TbFilterDown } from "react-icons/tb";
import { MdOutlineKingBed } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { IoSearchSharp } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { MdAirportShuttle } from "react-icons/md";
import { TbParkingCircleFilled } from "react-icons/tb";
import { IoIosFitness } from "react-icons/io";
import { MdOutlinePool } from "react-icons/md";
import { BiSolidSpa } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
const HotelsFilterDrawer = () => {
  return (
    <div className="xl:h-screen overflow-y-scroll shadow-lg p-4">
      <div className="flex flex-col ">
        <div className="flex  items-center gap-2 ">
          <div className=" text-green-600">
            <TbFilterDown />
          </div>
          <p className="text-xs font-bold  text-green-600">Hide Filters</p>
        </div>
        <hr class="h-px my-3 bg-gray-2B border-0 " />
        <div className="flex flex-col gap-8">

          {/* Book With Peace of Mind */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">
                Book With Peace of Mind
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs text-black-16 font-regular">
                  Free Cancellation
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">752</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Pay on Arrival
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">228</p>
            </div>
          </diV>

          {/* price */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">
                Price
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs text-black-16 font-regular">
                  Rs 0 - Rs 44,200
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">585</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Rs 4,200 - 88,400
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">245</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Rs 4,200 - 88,400
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">245</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Rs 4,200 - 88,400
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">245</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Rs 4,200 - 88,400
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">245</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Rs 4,200 - 88,400
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">245</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Rs 4,200 - 88,400
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">245</p>
            </div>

            <div className=" grid   grid-cols-12 gap-3">
              <div className="grid grid-cols-12 items-center col-span-10 gap-2">

                <div className="col-span-5">
                  <Input
                    type="text"
                    placeholder="Rs"
                    radius="none"
                    classNames={{
                      inputWrapper: "",
                    }}
                  />
                </div>
                <div className="col-span-2">---</div>
                <div className="col-span-5">
                  <Input
                    type="text"
                    placeholder="Rs"
                    radius="none"
                    classNames={{
                      inputWrapper: " ",
                    }}
                  />
                </div>
              </div>

              <button className="p-3 rounded-lg bg-blue-3c flex justify-center items-center text-white col-span-2">
                <IoSearchSharp />
              </button>
            </div>
          </diV>

          {/* start rating */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">
                Star Rating
              </h6>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex items-center gap-1 col-span-5">
                <div>
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                  5 Stars
                </p>
              </div>

              <div className=" col-span-4">
                <ReactStars
                  count={5}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-3 text-end">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex items-center gap-1 col-span-5">
                <div>
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                  4 Stars
                </p>
              </div>

              <div className=" col-span-4">
                <ReactStars
                  count={4}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-3 text-end">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex items-center gap-1 col-span-5">
                <div>
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                  3 Stars
                </p>
              </div>

              <div className=" col-span-4">
                <ReactStars
                  count={3}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-3 text-end">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex items-center gap-1 col-span-5">
                <div>
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                  2 Stars
                </p>
              </div>

              <div className=" col-span-4">
                <ReactStars
                  count={2}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-3 text-end">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex items-center gap-1 col-span-5">
                <div>
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                  1 Stars
                </p>
              </div>

              <div className=" col-span-4">
                <ReactStars
                  count={1}
                  // onChange={ratingChange}
                  value={1}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-3 text-end">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex items-center gap-1 col-span-6">
                <div>
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap flex items-center justify-between gap-2">
                  Unrated
                </p>
              </div>

              <div className="col-span-6 text-end">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

          </diV>

          {/* accomodation type */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                AccomoDation Type
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">HoteL</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Apartment</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Resort</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Holiday rentals
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Hostel</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Guest House
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>
            <button className="text-blue-400 flex justify-start">See More</button>
          </diV>

          {/* Cancellation policy */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Cancellation policy
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Free Consaltation</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>


            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Non Refundable</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

          </diV>

          {/* meal plan */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Meal Plan
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Breakfast Included</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>


            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Meals Not Included</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

          </diV>

          {/* Guest Rating */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Guest Rating
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><span className="font-bold">5.0+</span> With Honours</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><span className="font-bold">4.5+</span> With Honours</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><span className="font-bold">4.0+</span> With Honours</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><span className="font-bold">3.5+</span> With Honours</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><span className="font-bold">5.0+</span> With Honours</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>


          </diV>

          {/* Deals */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Guest Rating
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Show Discounts</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>
          </diV>

          {/* amerities */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Amerities
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><FaWifi />Wifi</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><MdAirportShuttle /> Airport Shuttle</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><TbParkingCircleFilled /> Parking</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><IoIosFitness /> Fitness Center</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><MdOutlinePool /> Pool</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 flex items-center gap-2"><BiSolidSpa /> Spa</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>
            <button className="text-blue-400 flex justify-start">See More</button>
          </diV>

          {/* Papular with */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Papular with
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Business Travelers</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Families</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Couples</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Solo Travelers</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

          </diV>

          {/* hotel chains */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Hotel Chains
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Accor Hotels</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Inter-Continental Hotels Group</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Hilton</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">MILLENNIUM & COPTHORNE Hotels</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Marriott International</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Jumerah Group</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <button className="text-blue-400 flex justify-start">See More</button>
          </diV>

          {/* neightbourhoods */}
          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                Neightbourhoods
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Daira</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Jumeirah</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Bur Dubai</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Al Barsha</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Za'abeel</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>

                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Mushrif</p>
              </div>
              <p className="text-xs font-regular text-gray-2B">32</p>
            </div>
            <button className="text-blue-400 flex justify-start">See More</button>
          </diV>
        </div>
      </div>
    </div>
  );
};

export default HotelsFilterDrawer;
