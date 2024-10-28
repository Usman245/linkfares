import React from "react";
import { TbFilterDown } from "react-icons/tb";
import { MdOutlineKingBed } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { IoSearchSharp } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
const HotelsFilterDrawer = () => {
  return (
    <div className="">
      <div className="shadow p-4 rounded-2xl flex flex-col ">
        <div className="flex  items-center gap-2 ">
          <div className=" text-green-600">
            <TbFilterDown />
          </div>
          <p className="text-xs font-bold  text-green-600">Hide Filters</p>
        </div>
        <hr class="h-px my-3 bg-gray-2B border-0 " />

        <div className="flex flex-col gap-8">
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
                  {" "}
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
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Pay on Arrival
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">228</p>
            </div>
          </diV>
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                {" "}
                <div className="col-span-5">
                  <Input
                    type="text"
                    label="Rs"
                    placeholder="Enter your Price"
                    classNames={{
                      inputWrapper: "",
                    }}
                  />
                </div>
                <div className="col-span-2">dfed</div>
                <div className="col-span-5">
                  <Input
                    type="text"
                    label="Rs"
                    placeholder="Enter your Price"
                    classNames={{
                      inputWrapper: "",
                    }}
                  />
                </div>
              </div>

              <button className="p-3 rounded-lg bg-blue-3c flex justify-center items-center text-white col-span-2">
                <IoSearchSharp />
              </button>
            </div>
          </diV>

          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdOutlineKingBed />
              <h6 className="text-base font-bold text-black">
                Star Rating
              </h6>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex  items-center gap-1 col-span-4">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap">
                  5 Stars
                </p>
              </div>

              <div className=" col-span-7 flex justify-end">
                <ReactStars
                  count={5}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-1">
                <p className="text-xs font-regular text-gray-2B">245</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items=center">
              <div className="flex  items-center gap-1 col-span-4">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap">
                  4 Stars
                </p>
              </div>

              <div className=" col-span-7 flex justify-end">
                <ReactStars
                  count={4}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-1">
                <p className="text-xs font-regular text-gray-2B">309</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex  items-center gap-1 col-span-4">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap">
                  3 Stars
                </p>
              </div>

              <div className=" col-span-7 flex justify-end">
                <ReactStars
                  count={3}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-1">
                <p className="text-xs font-regular text-gray-2B">309</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex  items-center gap-1 col-span-4">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap">
                  2 Stars
                </p>
              </div>

              <div className=" col-span-7 flex justify-end">
                <ReactStars
                  count={2}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-1">
                <p className="text-xs font-regular text-gray-2B">309</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex  items-center gap-1 col-span-4">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16 text-nowrap">
                  1 Stars
                </p>
              </div>

              <div className=" col-span-7 flex justify-end">
                <ReactStars
                  count={1}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-1">
                <p className="text-xs font-regular text-gray-2B">309</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="flex  items-center gap-1 col-span-4">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Unrated</p>
              </div>

              <div className=" col-span-7 flex justify-end  ">
                <ReactStars
                  count={0}
                  // onChange={ratingChange}
                  value={2}
                  size={24}
                  activeColor="#FFA033"
                />
              </div>

              <div className="col-span-1">
                <p className="text-xs font-regular text-gray-2B">309</p>
              </div>
            </div>
          </diV>

          <diV className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h6 className="text-base font-bold text-black">
                AccomoDation Type{" "}AccomoDation Type{" "}
              </h6>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">HoteL</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Apartment</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Resort</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>
                  {" "}
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
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">Hostel</p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <div>
                  {" "}
                  <Checkbox defaultSelected color="primary"></Checkbox>
                </div>
                <p className="text-xs font-regular text-black-16">
                  Guest House
                </p>
              </div>

              <p className="text-xs font-regular text-gray-2B">670</p>
            </div>
          </diV>
        </div>
      </div>
    </div>
  );
};

export default HotelsFilterDrawer;
