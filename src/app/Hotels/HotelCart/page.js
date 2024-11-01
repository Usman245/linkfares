import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const page = () => {
  return (
    <div className="container ">
      <div className="py-20">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-semibold font-poppins text-gray-71">
            Your <span className="text-green-600">Cart</span>
          </h2>

          <div className="flex flex-col gap-4 ">
            <div className="flex items-center  gap-2">
              <div className="text-green-600 ">
                <MdOutlineCheckBox />
              </div>
              <h4 className="text-lg font-medium text-green-600 font-medium font-poppins">
                Cart
              </h4>
            </div>
            <div className="p-16 rounded-xl  bg-blue-0D">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <div className="p-6 rounded-xl bg-white drop-shadow-xl">
                    <div className="flex flex-col  gap-2">
                      <div className="h-[270px] w-full">
                        <img
                          src="/images/cartimg.png"
                          className="object-fill h-full w-full"
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className="flex justify-between items-center pb-4">
                          <p className="text-xl font-semibold text-black-16 font-poppins">
                            {" "}
                            Hotel Excesior Karachi
                          </p>
                          <p className="text-green-600 font-semibold text-xl ">
                            PKR 18,571
                          </p>
                        </div>

                        <div className="flex gap-2 pb-3 ">
                          <div className="flex  items-baseline ">
                            <p className="text-[45px] font-extrabold font-Roboto text-green-600  ">
                              4.3
                            </p>
                            <p className="text-lg font-regular text-gray-71 ">
                              /5
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-xl text-black16 font-poppins ">
                              Very Good{" "}
                            </p>
                            <p className="text-lg font-regular text-gray-71 ">
                              41 Review
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 pb-4">
                          <ul className="flex flex-col gap-2 ">
                            <li className="">
                              <div className="flex gap-1 items-center">
                                <div className="text-xs">
                                  <GoDotFill />
                                </div>
                                <p className="text-sm font-regular text-black">
                                  {" "}
                                  1 Large double bed  and 1 futon bed
                                </p>
                              </div>
                            </li>
                            <li className="">
                              <div className="flex gap-1 items-center">
                                <div className="text-xs">
                                  <GoDotFill />
                                </div>
                                <p className="text-sm font-regular text-black">
                                  {" "}
                                  Bedroom 2: 2 single beds
                                </p>
                              </div>
                            </li>
                            <li className="">
                              <div className="flex gap-1 items-center">
                                <div className="text-xs">
                                  <GoDotFill />
                                </div>
                                <p className="text-sm font-regular text-black">
                                  {" "}
                                  Cot available on request
                                </p>
                              </div>
                            </li>
                          </ul>

                          <ul className="flex flex-col gap-2 ">
                            <li className="text-sm font-regular text-black">
                              Air conditioning
                            </li>
                            <li className="text-sm font-regular text-black">
                              Flat-screen TV
                            </li>
                            <li className="text-sm font-regular text-black">
                              Free WiFi
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm text-black-16 font-regular">
                            After staying in several hotels in Saddar, we
                            finally settled in Hotel Excelsior because it was
                            fully booked until that date. The hotel was amazing,
                            the cleanliness, the breakfast had both Pakistani
                            Breakfast and Continental breakfast also. The stay
                            was very comfortable and the service was amazing as…
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
