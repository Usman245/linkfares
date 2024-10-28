"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export const locations = [
  { key: "dubai", label: "Dubai" },
  { key: "jeddah", label: "Jeddah" },
  { key: "riyadh", label: "Riyadh" },
  { key: "makkah", label: "Makkah" },
  { key: "madinah", label: "Madinah" },
  { key: "doha", label: "Doha" },
  { key: "kuwait", label: "Kuwait" },
  { key: "muscat", label: "Muscat" },
  { key: "amman", label: "Amman" },
  { key: "cairo", label: "Cairo" },
  { key: "beirut", label: "Beirut" },
  { key: "manama", label: "Manama" },
  { key: "baghdad", label: "Baghdad" },
];

const HotelSelectionView = () => {
  return (
    <div className="py-3 bg-green-600 ">
      <div className="container ">
        <div className="grid grid-cols-12 py-[8px] px-[12px] bg-white">
          <div className="col-span-5">
            <Select
              label="Favorite Animal"
              placeholder="Select an animal"
              className="w-full" // Set width to full
              variant="flat"
              radius="none" // Use the 'flat' variant to remove the border style
              css={{
                backgroundColor: "transparent", // Set background to transparent
                border: "none", // Remove the border
                boxShadow: "none", // Remove any shadow if applied
              }}
              classNames={{
                label: "text-green-600 ", // Set label color to green-600
                base: "bg-transparent border-none",
                value:
                  " group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold ",
                trigger: "bg-transparent", // Ensure base styles have no background or border
              }}
            >
              {locations.map((item) => (
                <SelectItem
                  key={item.key}
                  classNames={{
                    label: "text-green-600 ", // Set label color to green-600
                    base: "bg-transparent border-none",
                    value:
                      " group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold ",
                    trigger: "bg-transparent", // Ensure base styles have no background or border
                  }}
                >
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-4  grid grid-cols-12">
            <div className="col-span-6">
              <DatePicker
                label="Birth date"
                className="w-full"
                radius="none"
                dateInputClassNames={{
                  segment: " text-green-600  font-bold",
                  innerWrapper: "text-green-600  ",
                  inputfield: "text-green-600 ",
                  value:
                    "group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold",
                }}
              />
            </div>
            <div className="col-span-6">
              <DatePicker
                label="Birth date"
                className="w-full"
                dateInputClassNames={{
                  segment: " text-green-600  font-bold",
                  innerWrapper: "text-green-600  ",
                  inputfield: "text-green-600 ",
                  value:
                    "group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold",
                }}
              />
            </div>
          </div>

          <div className="col-span-3">
            <Input
              type="text "
              label="Email"
              placeholder="Enter your email"
              classNames={{
                label: "text-green-600 ", // Set label color to green-600
                base: "bg-transparent border-none",
                input:
                  " group-data-[has-value=true]:text-lg  group-data-[has-value=true]:text-green-600  group-data-[has-value=true]:font-bold ",
                trigger: "bg-transparent", // Ensure base styles have no background or border
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSelectionView;
