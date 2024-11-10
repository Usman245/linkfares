"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight, FaCaretRight } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaCalculator } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/tabs";
import "../../globals.css";

const CarRentalDestinations = () => {
  const variants = ["underlined"];

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
    {
      id: 5,
      title: "Car hire in Europe",
      content: "Most popular car type: Economy",
      imgPath: "/images/londoncard.png",
      price: "5699",
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
          <FaCarSide className="w-6 h-6" />
          <span className="text-base font-semibold">
            Search for cheap car rental in seconds anywhere in the world
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <FaCalculator className="w-6 h-6" />
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
        className="md:mt-24  mt-8 bg-white overflow-hidden"
        style={{ boxShadow: "0px 1.33px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        {variants.map((variant) => (
          <Tabs
            key={variant}
            variant={variant}
            color="primary"
            aria-label="Tabs variants"
            className="overflow-x-auto flex"
            style={{
              overflowY: "scroll",
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
            }}
          >
            {navItem.map((e, index) => (
              <Tab
                key={e}
                title={e}
                className="text-base cursor-pointer py-5 px-6"
              />
            ))}
          </Tabs>
        ))}
      </div>
      <div className="md:mt-24 mt-8 font-roboto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Popular car rental destination</h1>
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

        <div className="relative mt-4">
          <Swiper
            className="py-5"
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
              <SwiperSlide
                key={card.id}
                className="flex justify-center bg-white rounded-b-lg h-full w-full max-w-sm flex-col min-h-[360px]" // Adjust min height as needed
                style={{ boxShadow: "0px 1px 3px 0px #25201F4D" }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.imgPath}
                    layout="fill" // Makes the image take the full height and width of the container
                    objectFit="cover"
                    quality={100} // Ensures high image quality
                    className="h-[171px]"
                    alt={card.title}
                  />
                </div>
                <div className="p-4 flex  justify-between gap-4">
                  <div className="text-start">
                    <h2 className="text-lg font-bold mb-1">{card.title}</h2>
                    <p className="text-gray-700 text-sm">{card.content}</p>
                  </div>
                  <div className="flex flex-col items-end justify-start  text-sm">
                    <div>From</div>
                    <div className="font-bold text-lg">RS{card.price}</div>
                    <div>Per day</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="px-4 py-2 rounded-lg md:mt-8 mt-4 bg-[#EFF3F8] flex gap-2 justify-start items-center font-roboto">
          <IoMdInformationCircle className="w-6 h-6 text-gray-800" />
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
