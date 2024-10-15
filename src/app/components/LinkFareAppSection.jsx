import React from "react";

const LinkFareAppSection = () => {
  return (
    <div className="bg-white ">
      <div className="container ">
        <div className="grid grid-cols-2  pb-[150px]">
          <div className="flex flex-col ">
            <h2 className="font-poppins font-bold text-[44px]  ">
              Get <span className="text-black-33">Link</span>
              <span className="text-green-600">Fares</span> App{" "}
            </h2>
            <p className="text-base font-bold text-black mt-[12px]">
              We will send you a link, open it on your phone to download the
              app.
            </p>

            <div className="flex gap-[50px] items-center  mt-[36px]">
              <div class="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                  <input
                    type="checkbox"
                    id="phone"
                    class="hidden peer"
                  />

                  <label
                    for="phone"
                    class="flex items-center justify-center  bg-gray-200  w-full h-full    border-2  rounded rounded-[50%] border   border-white cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600  p-2  relative "
                  ></label>
                </div>

                <span class="text-2xl font-roboto font-bold">Phone</span>
              </div>
              <div class="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-green-600 rounded-full">
                  <input
                    type="checkbox"
                    id="email"
                    class="hidden peer"
                  />

                  <label
                    for="email"
                    class="flex items-center justify-center  bg-gray-200  w-full h-full    border-2  rounded rounded-[50%] border   border-white cursor-pointer peer-checked:bg-green-600 peer-checked:border-geen-600  p-2  relative "
                  ></label>
                </div>

                <span class="text-2xl font-roboto font-bold ">Email</span>
              </div>
            </div>


            <div className="flex gap-2  mt-[52px]"> 
                <input  className="   py-[22px] px-[23px] text-xl font-bold font-roboto border border-gray-56 rounded-lg   outline-none "  type="tel" placeholder="Your Phone Number"></input>
                <button className="bg-green-6A  py-[22px] px-[52px] rounded-lg bg-green-500 hover:bg-green-600  text-xl font-bold  font-roboto text-[28px] text-white"> Share Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFareAppSection;
