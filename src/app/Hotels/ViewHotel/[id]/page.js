"use client";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { LuUpload } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Select, SelectItem } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import { FaRegClock } from "react-icons/fa";
import { LiaChildSolid } from "react-icons/lia";
import { FaBed } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiSealWarningBold } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { TbParkingCircleFilled } from "react-icons/tb";
import { GiCoolSpices } from "react-icons/gi";
import { MdAirportShuttle } from "react-icons/md";
import { FaFemale } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import Link from "next/link";

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
  ],

  timing: [
    {
      icon: <LiaChildSolid className="text-2xl" />,
      title: "Children",
      description: "children are welcome at this hotel"
    }
  ],
  timingContent: [
    {
      description: "children are welcome at this hotel"
    },
    {
      description: "adult are welcome at this hotel"
    },
    {
      description: "For each room, 1 child can use existing beds for an additional charge of PKR 1500"
    },
    {
      description: "Pets are not allowed."
    },
    {
      breakefast: {
        description: "Breakfast available.",
        menu: "Buffet.",
        options: "Continental breakfast.",
        price: "Rs 1,833 /person"
      }
    },
    {
      description: `According to local regulations, foreign guests entering Pakistan are required to report 
                      their purpose of visit and itinerary to the local police. Some areas may have temporary 
                      control measures or closures. It is necessary to have security guard and bulletproof 
                      vehicles for travel. Please contact the hotel in advance to confirm the relevant 
                      arrangements.`
    },
    {
      description: "Visitors of the guests are not permitted to stay in or enter the guest rooms."
    },
    {
      description: "The hotel accepts the following payment methods:"
    },
  ],
  amenities: [
    {
      icons: <FaWifi className='text-[30px]' />,
      title: "Wi-fi"
    },
    {
      icons: <TbParkingCircleFilled className='text-[30px]' />,
      title: "Parking"
    },
    {
      icons: <GiCoolSpices className='text-[30px]' />,
      title: "Air conditioning"
    },
    {
      icons: <MdAirportShuttle className='text-[30px]' />,
      title: "Airport shuttle"
    },
    {
      icons: <FaFemale className='text-[30px]' />,
      title: "Front desk 24 hour"
    },
    {
      icons: <IoFastFoodSharp className='text-[30px]' />,
      title: "Restaurant"
    },
  ]

}

const page = () => {
  return (
    <div className="main py-5">
      <div className="container">
        <div className="grid grid-cols-12 col-span-12 flex items-center">
          <div className="xl:col-span-8 col-span-10 flex flex-col md:gap-2 gap-1">
            <h1 className="font-semibold flex items-center">
              <span className="mr-8 xl:text-5xl md:text-4xl text-2xl ">
                Hotel Excelsior Karachi
              </span>{" "}
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={4}
                size={28}
                activeColor="#F55D42"
              />
            </h1>
            <p className="flex items-center sm:mt-1">
              <ImLocation2 />{" "}
              <span className="ml-2 xl:text-base xs:text-sm">
                Plot SB-21, Sarwar Shaheed Rd، opposite Atrium Mall،, Karachi,
                75600, Pakistan
              </span>
            </p>
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
            <p className="text-base leading-[20px]">
              {`        After staying in several hotels in Saddar, we finally settled in
              Hotel Excelsior because it was fully booked until that date. The
              hotel was amazing, the cleanliness, the breakfast had both
              Pakistani Breakfast and Continental breakfast also. The stay was
              very comfortable and the service was amazing as…`}
            </p>
          </div>
        </div>
      </div>

      {/* banner gallery */}
      <div className="media grid grid grid-cols-12 col-span-12 flex my-5">
        <div className="col-span-5">
          <img
            className="border-r-2 object-cover w-full h-full"
            src="/images/industries.jpg"
            alt=""
          />
        </div>
        <div className="col-span-4">
          <div>
            <img
              className="border-r-2 object-cover w-full h-full"
              src="/images/industries.jpg"
              alt=""
            />
          </div>
          <div className="flex">
            <div>
              <img
                className="border border-t-2 border-r-2"
                src="/images/industries.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="border border-t-2 border-r-2"
                src="/images/industries.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div>
            <video
              className="object-cover w-full h-full"
              width="360"
              height="240"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
            </video>
            <img
              className="border border-t-2 object-cover w-full h-full"
              src="/images/industries.jpg"
              alt=""
            />
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
                classNames={{
                  inputWrapper: "",
                }}
              />
            </div>
            <div className="col-span-12 xl:col-span-4">
              <Select
                label="Select an animal"
                className="max-w-xs w-full"
                radius="none"
              >
                {hotelViewContent.range.map((items) => (
                  <SelectItem key={items.key}>{items.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="col-span-12 xl:col-span-4">
              <button className="bg-[#12B76A] rounded-lg py-3 px-[100px] text-white font-semibold">
                Search Room And Rates
              </button>
            </div>
          </div>

          {/* buttons */}
          <div className="button my-5 grid-cols-12 col-span-12 flex gap-3 items-center flex-wrap">
            <div className="col-span-2">
              <h1 className="font-semibold">Filter by</h1>
            </div>
            <div className="col-span-10 flex gap-2 flex-wrap">
              {hotelViewContent.button.map((content, index) => (
                <button
                  key={index}
                  className="border rounded-lg w-full xs:w-max shadow py-2 px-[16px]"
                >
                  {content.title}
                </button>
              ))}
            </div>
          </div>

          {/* card details */}
          <div className="detail">
            <p>Price per night including taxes and fees</p>
            <div className="grid grid-cols-12 col-span-12 bg-white rounded-lg flex items-center p-[15px] mt-4">
              <div className="grid grid-cols-12 flex gap-5 items-center lg:col-span-10 md:col-span-8 col-span-12">
                <div className="img lg:col-span-3 md:col-span-5 col-span-12 h-full">
                  <img
                    className="rounded-2xl h-full w-full object-cover"
                    src="/images/industries.jpg"
                    alt="hotel"
                  />
                </div>
                <div className="bookingDetail lg:col-span-9 md:col-span-7 col-span-12 col-span-12 flex gap-2 flex-col">
                  <h6 className="font-semibold">Deluxe Room</h6>
                  <div className="text-sm">
                    <p>2.2 km from Shahrah-e-Faisal</p>
                    <ul className="list-disc ml-3">
                      <li>Non-refundable , Breakfast Included</li>
                    </ul>
                  </div>
                  <h6 className="font-semibold">Deluxe Room</h6>
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
                  <Link href={"/Hotels/HotelCart"}>
                    <button className="border rounded-lg w-full xs:w-max bg-[#12b76a] py-2 px-[16px] text-white">
                      Book Now
                    </button>
                  </Link>
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
                <p>{hotelViewContent.timingContent[0].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <FaBed className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Additional beds</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
                <p>{hotelViewContent.timingContent[1].description}</p>
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
                    <p>{hotelViewContent.timingContent[2].description}</p>
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
                <p>{hotelViewContent.timingContent[3].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <PiForkKnifeFill className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Breakfast</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2 flex flex-col gap-2">
                <p>{hotelViewContent.timingContent[4].breakefast.description}</p>
                <div className="ageLimit grid grid-cols-12 gap-2 border-b">
                  <div className="sm:col-span-5 col-span-12 flex gap-5 items-center">
                    <h6 className="font-bold  text-base">Breakfast menu</h6>
                  </div>
                  <div className="sm:col-span-7 col-span-12">
                    <p>{hotelViewContent.timingContent[4].breakefast.menu}</p>
                  </div>
                </div>
                <div className="ageLimit grid grid-cols-12 gap-2 border-b">
                  <div className="sm:col-span-5 col-span-12 flex gap-5 items-center">
                    <h6 className="font-bold  text-base">Breakfast options</h6>
                  </div>
                  <div className="sm:col-span-7 col-span-12">
                    <p>{hotelViewContent.timingContent[4].breakefast.options}</p>
                  </div>
                </div>
                <div className="ageLimit grid grid-cols-12 gap-2">
                  <div className="sm:col-span-5 col-span-12 flex gap-5 items-center">
                    <h6 className="font-bold  text-base">Breakfast price</h6>
                  </div>
                  <div className="sm:col-span-7 col-span-12">
                    <p>{hotelViewContent.timingContent[4].breakefast.price}</p>
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
                <p>{hotelViewContent.timingContent[5].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5 border-b">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <FaRegBuilding className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Important information about
                  the city</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
                <p>{hotelViewContent.timingContent[6].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-12 flex items-center gap-5">
              <div className="sm:col-span-4 col-span-12 flex gap-5 items-center my-2">
                <MdOutlinePayments className="text-2xl text-[#12B76A]" />
                <h3 className="text-lg font-semibold">Accepted payment methods</h3>
              </div>
              <div className="sm:col-span-8 col-span-12 my-2">
                <p>{hotelViewContent.timingContent[7].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* amenities  */}
      <div className="aminities">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className='title'>
              <h6 className='text-4xl font-semibold'>Amenities</h6>
            </div>
            <div className="aminities_services grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2">
              {
                hotelViewContent.amenities.map((items, index) => (
                  <div key={index} className="amenitiesCard  px-3 text-center bg-[#f1f1f1] md:h-40 h-28 rounded flex flex-col gap-1 justify-center items-center">
                    {items.icons}
                    <h6 className='text-sm'>{items.title}</h6>
                  </div>))
              }
            </div>
            <div className="button flex justify-center">
              <button className='bg-[#f1f1f1] font-semibold p-2 w-full w-max rounded px-4'>See All Amenities</button>
            </div>
          </div>
        </div>
      </div>
      {/* rating and reviews */}
      <div className="ratingReviews py-5">
        <div className="title flex flex-col gap-5">
          <div className='title'>
            <h6 className='md:text-4xl text-2xl font-semibold'>Ratings and reviews</h6>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-0 items-center">
            <div className="md:col-span-3 col-span-12">
              <div className="rating">
                <div className="grid grid-cols-12">
                  <div className='number col-span-4'>
                    <span className="text-4xl font-bold">43</span>
                    <span>/5</span>
                  </div>
                  <span className="review col-span-8">
                    <h5 className="font-semibold">Very good</h5>
                    <p className="text-sm">41 reviews</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xs:grid-cols-6 md:gap-16 md:col-span-9 col-span-12">
              <div className="flex flex-col md:gap-5 xs:gap-0">
                <div className="Cleanliness flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Cleanliness</p>
                    <span>4.0</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={90} />
                </div>
                <div className="Service flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Service</p>
                    <span>3.7</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={96} />
                </div>
              </div>
              <div className="flex flex-col md:gap-5 xs:gap-0">
                <div className="Location flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Location</p>
                    <span>3.9</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={84} />
                </div>
                <div className="Facilities flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Facilities</p>
                    <span>3.9</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallery */}
      <div className="gallery flex flex-col gap-5 py-5">
        <div className='title mb-5'>
          <h6 className='md:text-4xl text-2xl font-semibold'>More about Hotel Excelsior Karachi</h6>
        </div>
        <div className="gallery">
          <Gallery images={images} />
        </div>
        <div className="description flex flex-col gap-2">
          <h6 className='md:text-2xl text-lg font-semibold'>Hotel Excelsior Karachi</h6>
          <p>
            Hotel Excelsior Karachi is situated in Karachi, in the Saddar Town district. With free WiFi,
            this 4-star hotel offers room service and a 24-hour front desk.
          </p>
          <p>There is a restaurant serving Chinese cuisine, and free private parking is available.</p>
        </div>
      </div>
      {/* rating and reviews */}
      <div className="ratingReviews py-5">
        <div className="title flex flex-col gap-5">
          <div className='title'>
            <h6 className='md:text-4xl text-2xl font-semibold'>Ratings and reviews</h6>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-0 items-center">
            <div className="md:col-span-3 col-span-12">
              <div className="rating">
                <div className="grid grid-cols-12">
                  <div className='number col-span-4'>
                    <span className="text-4xl font-bold">43</span>
                    <span>/5</span>
                  </div>
                  <span className="review col-span-8">
                    <h5 className="font-semibold">Very good</h5>
                    <p className="text-sm">41 reviews</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xs:grid-cols-6 md:gap-16 md:col-span-9 col-span-12">
              <div className="flex flex-col md:gap-5 xs:gap-0">
                <div className="Cleanliness flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Cleanliness</p>
                    <span>4.0</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={90} />
                </div>
                <div className="Service flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Service</p>
                    <span>3.7</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={96} />
                </div>
              </div>
              <div className="flex flex-col md:gap-5 xs:gap-0">
                <div className="Location flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Location</p>
                    <span>3.9</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={84} />
                </div>
                <div className="Facilities flex flex-col gap-1">
                  <div className="detail flex justify-between">
                    <p>Facilities</p>
                    <span>3.9</span>
                  </div>
                  <ProgressBar bgColor="#12B76A" completed={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
