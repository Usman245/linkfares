"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCaretRight,
  FaInfo,
} from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const CarRentalDestinations = () => {
  const navItem = [
    "Car hire deals from Rs17,110",
    "The best Islamabad car hire providers",
    "Fast facts",
    "How to find the best deal",
    "FAQs",
  ];
  const cards = [
    {
      id: 1,
      title: "Car hire in Istanbul",
      content: "Most popular car type: Economy",
      imgPath: "/images/istanbulcard.png",
      price: "9999",
    },
    {
      id: 2,
      title: "Car hire in Dubai",
      content: "Most popular car type: Intermediate",
      imgPath: "/images/dubaicard.png",
      price: "4499",
    },
    {
      id: 3,
      title: "Car hire in London",
      content: "Most popular car type: Economy",
      imgPath: "/images/londoncard.png",
      price: "5699",
    },
    {
      id: 4,
      title: "Car hire in Pakistan",
      content: "Most popular car type: Economy",
      imgPath: "/images/london.png",
      price: "4599",
    },
    // Add more cards as needed
  ];

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(navItem.length - 1); // Default to the last item (FAQs)

  return (
    <div className="container mx-auto">
      <div className="flex gap-2 items-center font-roboto my-8">
        <Link href="#" className="text-blue-600">
          Home
        </Link>
        <span>
          <FaCaretRight color="gray" />
        </span>
        <Link href="#" className="text-gray-800">
          Car hire
        </Link>
      </div>

      <div className="my-4 flex md:flex-row flex-col gap-4 list-none justify-between font-roboto">
        <li className="flex gap-2 items-start">
          <FaCarSide size={25} />
          <span className="text-base font-semibold">
            Search for cheap car rental in seconds anywhere in the world
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <FaCarSide size={25} />
          <span className="text-base font-semibold">
            Compare deals from trusted car hire providers in one place
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <AiFillTag size={25} />
          <span className="text-base font-semibold">
            Rent a car with a flexible booking policy or free cancellation
          </span>
        </li>
      </div>

      <div
        className="my-6 px-6 py-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 items-center justify-center font-roboto"
        style={{ boxShadow: "0px 1.33px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        {navItem.map((item, index) => (
          <Link
            href="#"
            key={index}
            className={`flex text-base font-normal ${
              activeIndex === index ? "text-blue-600  underline" : "text-black"
            }`}
            onClick={() => setActiveIndex(index)} // Set active index on click
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="my-4 font-roboto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold my-2">
            Popular car rental destination
          </h1>
          <div className="flex gap-2 items-center">
            <button
              ref={prevButtonRef}
              className="bg-[#E0E4E9] text-black rounded p-2 w-8 h-8"
            >
              <FaAngleLeft />
            </button>
            <button
              ref={nextButtonRef}
              className="bg-[#E0E4E9] text-black rounded p-2 w-8 h-8"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              250: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div
                  className=" bg-white rounded-b-xl "
                  style={{ boxShadow: "0px 1px 3px 0px rgba(37, 32, 31, 0.3)" }}
                >
                  <Image
                    src={card.imgPath}
                    width={370}
                    height={182}
                    className="w-auto h-auto object-cover rounded"
                  />
                  <div className="flex py-2 px-4  justify-between">
                    <div className="flex flex-col items-start gap-[1px] ">
                      <h2 className="text-xl font-bold my-2">{card.title}</h2>
                      <p className="text-gray-700">{card.content}</p>
                    </div>
                    <div className="flex flex-col items-end  text-base">
                      <div>From</div>
                      <div className="font-bold text-xl">RS{card.price}</div>
                      <div>Per day</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="px-4 py-2 rounded-lg my-4 bg-[#EFF3F8] flex gap-2 items-start font-roboto">
          <IoMdInformationCircle className="w-8 h-8 text-gray-800" />
          <div className="text-base font-normal">
            These are estimated prices to help you choose from a large number of
            options. Each is an average based on the lowest{" "}
            <span className="font-medium">car rental</span> prices found for
            each destination over the last 15 days.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalDestinations;
