import React from "react";
import Image from "next/image";
import Link from "next/link";

const exploreData = [
  {
    id: 1,
    imgpath: "/images/explore.png",
    cardtitle: "Explore Everywhere",
  },
  {
    id: 2,
    imgpath: "/images/flights.png",
    cardtitle: "Flights",
  },
  {
    id: 3,
    imgpath: "/images/bus.png",
    cardtitle: "Bus",
  },
  {
    id: 4,
    imgpath: "/images/Hotel.png",
    cardtitle: "Hotels",
  },
];

const ExploreMore = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col gap-[27px]  pb-[124px]">
          <div className="flex  flex-col justify-center items-center">
            <p className="font-poppins font-semiold text-[44px] text-black">
              Explore <span className="text-green-600">More</span>
            </p>
            <p className="text-base font-roboto text-center font-bold  text-black-33">
              Every moment, every place, everything you need!
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploreData.map((item, index) => (
              <Link href="#" key={index} className=" relative ">
                <div className="rounded-lg">
                  <Image
                    src={item.imgpath}
                    width={270}
                    height={270}
                    layout="responsive"
                    alt=""
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 w-full rounded-lg"></div>
                  <p className="font-poppins font-bold text-[22px] absolute bottom-[16px] text-white left-[16px] ">
                    {item.cardtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
