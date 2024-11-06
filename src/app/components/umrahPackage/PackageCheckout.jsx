import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaPlus,
  FaAngleRight,
  FaAngleDown,
  FaStar,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";

export default function CheckoutComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showJazzCashFields, setShowJazzCashFields] = useState(false);
  const [showCardList, setShowCardList] = useState(false);
  const [savedCards, setSavedCards] = useState([]);

  // Load saved cards from localStorage on component mount
  useEffect(() => {
    Modal.setAppElement(document.body);
    const cards = JSON.parse(localStorage.getItem("savedCards")) || [];
    setSavedCards(cards);
  }, []);

  // Toggle Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Save new card to localStorage
  const saveCard = (cardDetails) => {
    const updatedCards = [...savedCards, cardDetails];
    localStorage.setItem("savedCards", JSON.stringify(updatedCards));
    setSavedCards(updatedCards);
    closeModal();
  };

  return (
    <div className=" flex flex-col lg:flex-row items-start justify-between p-6 bg-white  w-full">
      {/* Left Side: Payment Method */}
      <div className="w-full lg:w-7/12 font-inter">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

        {/* JazzCash/Easypaisa Option */}
        <div
          className="flex items-center justify-between p-3 border rounded-lg cursor-pointer"
          onClick={() => setShowJazzCashFields(!showJazzCashFields)}
        >
          <span className="text-sm">JazzCash/Easypaisa</span>
          {showJazzCashFields ? <FaAngleDown /> : <FaAngleRight />}
        </div>

        {/* JazzCash/Easypaisa Input Fields */}
        {showJazzCashFields && (
          <div className="mt-2 space-y-2">
            <input
              type="text"
              placeholder="JazzCash Number"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Easypaisa Number"
              className="w-full p-2 border rounded-lg"
            />
          </div>
        )}

        {/* Debit/Credit Card Option */}
        <div
          className="flex items-center justify-between p-3 border rounded-lg cursor-pointer mt-4"
          onClick={() => setShowCardList(!showCardList)}
        >
          <span className="text-sm">Debit/Credit Card</span>
          {showCardList ? <FaAngleDown /> : <FaAngleRight />}
        </div>

        {/* Card List */}
        {showCardList && (
          <div className="space-y-2 mt-2">
            {/* Existing Cards from localStorage */}
            {savedCards.length > 0 ? (
              savedCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2" />
                    <span className="text-sm">
                      {card.bankName} - **** {card.cardNumber.slice(-4)}
                    </span>
                  </div>
                  <input type="radio" name="card" />
                </div>
              ))
            ) : (
              // Dummy Card if no saved cards are found
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center">
                  <FaCheckCircle className="text-blue-600 mr-2" />
                  <span className="text-sm">Dummy Bank - **** 1234</span>
                </div>
                <input type="radio" name="card" />
              </div>
            )}

            {/* Add New Card Button */}
            <button
              className="flex items-center justify-start p-2 mt-2  rounded-lg "
              onClick={openModal}
            >
              <div className="bg-teal-100 text-[#434343] p-2 rounded-full font-inter mr-2">
                <FaPlus />
              </div>
              Add New Card
            </button>
          </div>
        )}

        {/* Add New Method Button */}
        <button className="flex items-center justify-center p-2 mt-4 text-green-600 border rounded-lg w-full">
          <FaPlus className="mr-2" />
          Add New Method
        </button>
      </div>

      {/* Right Side: Order Summary */}
      <div className="w-full mr-4 lg:w-5/12 lg:mt-6 mt-12 lg:ml-6 font-inter">
        <div className="bg-[#F5F9FF] py-4 px-4 lg:px-8 lg:py-7 lg:rounded-[33px] rounded-lg relative">
          <div className="flex flex-col items-start justify-center bg-white py-2 px-4 rounded-lg mb-4 relative">
            {/* Close button in the top-right corner */}
            <button
              className="absolute top-[-6px] right-[-6px] bg-green-600 p-1 rounded-full text-white"
              onClick={() => {
                console.log("Close button clicked");
              }}
            >
              <RxCross1 size={16} />
            </button>

            <div className="flex items-start lg:flex-row flex-col  justify-start gap-4">
              <Image
                src="/images/ummrahBannerBg.png"
                alt="Package"
                width="108"
                height="73"
                className="w-24 h-24 rounded-xl"
              />
              <div>
                <h3 className="font-semibold text-lg">Umrah 21 Days Package</h3>
                <p className="text-green-500 font-bold text-lg mt-2">
                  PKR 195,000
                </p>
              </div>
            </div>
            <div className="flex justify-start flex-wrap items-center gap-1 mt-2">
              <span>5/5</span>
              <ul className="flex gap-1 text-yellow-500">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <div className="w-28 h-[3px] bg-green-600 rounded-xl"></div>
            </div>
          </div>

          {/* Promo and Payment Details as in your code */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add Promo Code Get Discount"
              className="w-full p-2 border rounded mb-4 outline-none"
            />
            <button className="text-green-600">Add Code</button>
          </div>
          <div className="mt-4 space-y-2 bg-white rounded-md px-4 py-2">
            <div className="flex justify-between font-bold">Payment Detail</div>
            <hr />
            <div className="flex justify-between">
              <span>Order</span>
              <span>PKR 195,000</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>0</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>PKR 195,000</span>
            </div>
          </div>
          <div className="bg-white rounded-md px-4 py-2 mt-4 flex justify-between">
            <span>Notes</span>
            <select name="" id="">
              <option value="Verified Email">Verified Email</option>
              <option value="Verified Phone">By Phone</option>
            </select>
          </div>
          <Link href="/" className="mt-4 w-full flex bg-green-400 text-white p-3 outline-none rounded" >
            Pay Now
          </Link>
        </div>
      </div>

      {/* Modal for Adding New Card */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white rounded-lg max-w-md mx-auto p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-lg font-semibold mb-4">Add New Card</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const cardDetails = {
              bankName: e.target.bankName.value,
              cardNumber: e.target.cardNumber.value,
            };
            saveCard(cardDetails);
          }}
          className="space-y-4"
        >
          <input
            name="bankName"
            type="text"
            placeholder="Bank Name"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            name="cardNumber"
            type="text"
            placeholder="Card Number"
            className="w-full p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-lg"
          >
            Save Card
          </button>
        </form>
      </Modal>
    </div>
  );
}
