"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import CityCards from "./CityCards";

// Define the data for tabs and hotels
let tabs = [
  { id: "Karachi", label: "Karachi" },
  { id: "Islamabad", label: "Islamabad" },
  { id: "Lahore", label: "Lahore" },
  { id: "Murree", label: "Murree" },
  { id: "Gilgit", label: "Gilgit" },
];

let recordsofhomehotels = [
  {
    hoteltitle: "Hotel Excelsior Karachi",
    locationtite: "0.11 km from city centre",
    hrating: "4.3",
    servicetype: "Very Good",
    totalreview: 41,
    price: "20,561",
    renttype: "Per Night",
    hotellocation: "Karachi",
   
  },

  {
    hoteltitle: "Hotel Excelsior Karachi",
    locationtite: "0.11 km from city centre",
    hrating: "4.3",
    servicetype: "Very Good",
    totalreview: 41,
    price: "20,561",
    renttype: "Per Night",
    hotellocation: "Karachi",
  },

  {
    hoteltitle: "Hotel Excelsior Karachi",
    locationtite: "0.11 km from city centre",
    hrating: "4.3",
    servicetype: "Very Good",
    totalreview: 41,
    price: "20,561",
    renttype: "Per Night",
    hotellocation: "Karachi",
  },

  {
    hoteltitle: "Hotel Excelsior Karachi",
    locationtite: "0.11 km from city centre",
    hrating: "4.3",
    servicetype: "Very Good",
    totalreview: 41,
    price: "20,561",
    renttype: "Per Night",
    hotellocation: "Karachi",
  },
  {
    hoteltitle: "Hotel Excelsior Islamabad",
    locationtite: "0.5 km from city centre",
    hrating: "4.5",
    servicetype: "Excellent",
    totalreview: 35,
    price: "18,500",
    renttype: "Per Night",
    hotellocation: "Islamabad",
  },
  {
    hoteltitle: "Hotel Excelsior Islamabad",
    locationtite: "0.5 km from city centre",
    hrating: "4.5",
    servicetype: "Excellent",
    totalreview: 35,
    price: "18,500",
    renttype: "Per Night",
    hotellocation: "Islamabad",
  },

  {
    hoteltitle: "Hotel Excelsior Islamabad",
    locationtite: "0.5 km from city centre",
    hrating: "4.5",
    servicetype: "Excellent",
    totalreview: 35,
    price: "18,500",
    renttype: "Per Night",
    hotellocation: "Islamabad",
  },

  {
    hoteltitle: "Hotel Excelsior Islamabad",
    locationtite: "0.5 km from city centre",
    hrating: "4.5",
    servicetype: "Excellent",
    totalreview: 35,
    price: "18,500",
    renttype: "Per Night",
    hotellocation: "Islamabad",
  },

  {
    hoteltitle: "Hotel in Lahore",
    locationtite: "1.2 km from city centre",
    hrating: "4.0",
    servicetype: "Good",
    totalreview: 22,
    price: "15,000",
    renttype: "Per Night",
    hotellocation: "Lahore",
  },

  {
    hoteltitle: "Hotel in Lahore",
    locationtite: "1.2 km from city centre",
    hrating: "4.0",
    servicetype: "Good",
    totalreview: 22,
    price: "15,000",
    renttype: "Per Night",
    hotellocation: "Lahore",
  },

  {
    hoteltitle: "Hotel in Lahore",
    locationtite: "1.2 km from city centre",
    hrating: "4.0",
    servicetype: "Good",
    totalreview: 22,
    price: "15,000",
    renttype: "Per Night",
    hotellocation: "Lahore",
  },

  {
    hoteltitle: "Hotel in Lahore",
    locationtite: "1.2 km from city centre",
    hrating: "4.0",
    servicetype: "Good",
    totalreview: 22,
    price: "15,000",
    renttype: "Per Night",
    hotellocation: "Lahore",
  },

  {
    hoteltitle: "Hotel in Lahore",
    locationtite: "1.2 km from city centre",
    hrating: "4.0",
    servicetype: "Good",
    totalreview: 22,
    price: "15,000",
    renttype: "Per Night",
    hotellocation: "Lahore",
  },
  {
    hoteltitle: "Hotel in Murree",
    locationtite: "2 km from city centre",
    hrating: "3.8",
    servicetype: "Good",
    totalreview: 18,
    price: "10,000",
    renttype: "Per Night",
    hotellocation: "Murree",
  },
  {
    hoteltitle: "Hotel in Murree",
    locationtite: "2 km from city centre",
    hrating: "3.8",
    servicetype: "Good",
    totalreview: 18,
    price: "10,000",
    renttype: "Per Night",
    hotellocation: "Murree",
  },
  // {
  //   hoteltitle: "Hotel in Gilgit",
  //   locationtite: "0.9 km from city centre",
  //   hrating: "4.1",
  //   servicetype: "Very Good",
  //   totalreview: 27,
  //   price: "12,000",
  //   renttype: "Per Night",
  //   hotellocation: "Gilgit",
  // },

  // {
  //   hoteltitle: "Hotel in Gilgit",
  //   locationtite: "0.9 km from city centre",
  //   hrating: "4.1",
  //   servicetype: "Very Good",
  //   totalreview: 27,
  //   price: "12,000",
  //   renttype: "Per Night",
  //   hotellocation: "Gilgit",
  // },

  // {
  //   hoteltitle: "Hotel in Gilgit",
  //   locationtite: "0.9 km from city centre",
  //   hrating: "4.1",
  //   servicetype: "Very Good",
  //   totalreview: 27,
  //   price: "12,000",
  //   renttype: "Per Night",
  //   hotellocation: "Gilgit",
  // },
];

const CityHotelCards = () => {
  const [selected, setSelected] = React.useState("Islamabad");

  const filteredHotels = recordsofhomehotels.filter(
    (hotel) => hotel.hotellocation === selected
  );

  return (
    <div className="container">
      <div className="py-20 flex flex-col gap-5">
        <div className="flex flex-col justify-center gap-2 items-center">
          <p className="text-3xl font-semibold text-black font-poppins">
            Hotels in your <span className="text-green-600">home country</span>
          </p>
          <p className="text-lg font-roboto">
            Your next adventure may be closer than you think. Discover hotels
            just beyond your doorstep.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <Tabs
            aria-label="Dynamic tabs"
            items={tabs}
            className="bg-none"
            color="primary"
            selectedKey={selected}
            onSelectionChange={setSelected} // Update active tab on change
          >
            {(item) => <Tab key={item.id} title={item.label}></Tab>}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel, index) => (
                <CityCards key={index} hotel={hotel} /> // Pass the hotel data to CityCards
              ))
            ) : (
              <p>No hotels found for this location.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityHotelCards;
