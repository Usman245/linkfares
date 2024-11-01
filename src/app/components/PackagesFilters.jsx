// PackagesFilter.js

import { useState } from "react";

const PackagesFilter = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [selectedRatings, setSelectedRatings] = useState([]);

  const budgetOptions = [
    "PKR (100000-200000)",
    "PKR (20000-50000)",
    "PKR (50000-200000)",
    "PKR (200000-400000)",
    "Above PKR 400000",
  ];

  const daysOptions = ["3-5", "5-8", "8-12", "12-15", "Above 15"];

  const ratingOptions = ["5", "4", "3"];

  const handleBudgetChange = (option) => {
    setSelectedBudget(option);
  };

  const handleDaysChange = (option) => {
    setSelectedDays(option);
  };

  const handleRatingChange = (option) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(option)
        ? prevRatings.filter((rating) => rating !== option)
        : [...prevRatings, option]
    );
  };

  return (
    <div className="bg-white p-6  max-w-md mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Budget</h2>
        <div className="flex flex-col gap-2">
          {budgetOptions.map((option, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="checkbox"
                checked={selectedBudget === option}
                onChange={() => handleBudgetChange(option)}
                className="form-checkbox h-5 w-5 rounded text-white  accent-[#2b9d68] focus:ring-0"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">No of Days</h2>
        <div className="flex flex-col gap-2">
          {daysOptions.map((option, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="checkbox"
                checked={selectedDays === option}
                onChange={() => handleDaysChange(option)}
                className="form-checkbox h-5 w-5 rounded text-white  accent-[#2b9d68] focus:ring-0"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Hotel Rating</h2>
        <div className="flex flex-col gap-2">
          {ratingOptions.map((option, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="checkbox"
                checked={selectedRatings.includes(option)}
                onChange={() => handleRatingChange(option)}
                className="form-checkbox h-5 w-5 rounded text-white  accent-[#2b9d68] focus:ring-0"
              />
              <span className="text-gray-700">{option} Star</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesFilter;
