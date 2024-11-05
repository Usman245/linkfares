import Link from "next/link";

const UmrahPackageDetail = () => {
  return (
    <div className="mt-4">
      <h3 className="text-green-600 font-poppins font-medium text-xl">
        Air Tickt
      </h3>
      <div className="font-medium text-lg font-poppins">
        Direct AirLine:{" "}
        <span className="font-normal">Lahore-Jaddah-Lahore</span>
      </div>
      <h3 className="text-green-600 font-medium text-base font-poppins my-1">
        Economy Package
      </h3>
      <div className="flex flex-col text-sm">
        Starting From
        <span className="font-medium text-base">PKR 195000/PP*</span>
      </div>
      <h3 className="text-green-600 font-medium text-base font-poppins my-1">
        Economy+Package
      </h3>
      <div className="flex flex-col text-sm">
        Starting From
        <span className="font-medium text-base">PKR 215000/PP*</span>
      </div>
      <h3 className="text-green-600 font-medium text-base font-poppins my-1">
        3 star Package
      </h3>
      <div className="flex flex-col text-sm">
        Starting From
        <span className="font-medium text-base">PKR 250000/PP*</span>
      </div>
      <div className="flex flex-col my-2 ">
        <h4>1st Days: Departure from Lahore</h4>
        <p>
          Your pilgrimage begins as you depart from Lahore and embark on a
          flight to the blessed city of Makkah. Take this time to prepare
          yourself mentally and spiritually for the holy journey ahead.
        </p>
      </div>
      <div className="flex flex-col my-2">
        <h1 className="font-poppins text-xl mb-1 font-medium">
          Day 1 to 5: Makkah The Holliest Place
        </h1>
        <p>
          Upon arrival in Makkah, you will be accommodated in a comfortable
          hotel conveniently located near the Grand Mosque. Over the next six
          days, you will have the opportunity to perform rituals, including
          Tawaf (circumambulation) around the Kaaba and Sa'i (walking) between
          the hills of Safa and Marwa. Our experienced guides will be there to
          assist and guide you throughout your stay, ensuring a smooth and
          fulfilling experience.
        </p>
      </div>
      <div className="flex flex-col my-2">
        <h1 className="font-poppins text-xl mb-1 font-medium">
          Day 1 to 5: Makkah The Holliest Place
        </h1>
        <p>
          Returning to Makkah, you will have ample time for personal worship,
          reflection, and prayers in the holy city. Continue to engage in
          voluntary acts of worship, visit significant landmarks, and make
          supplications at the sacred sites, including Mount Arafat, Mina, and
          Muzdalifah. Our knowledgeable guides will be available to provide
          assistance and answer any questions you may have during this period.
        </p>
      </div>
      <div className="flex flex-col my-2">
        <h1 className="font-poppins text-xl mb-1 font-medium">
          Day 1 to 5: Makkah The Holliest Place
        </h1>
        <p>
          As your profound pilgrimage journey comes to an end, you will depart
          from Jeddah with a heart filled with gratitude and a soul nourished by
          this transformative experience. Cherish the memories and lessons
          gained during your pilgrimage and return to Lahore with a renewed
          connection to your faith.
        </p>
      </div>
      <div className="flex flex-col my-2">
        <h1 className="font-poppins text-xl mb-1 font-medium">
          Package Included
        </h1>
        <li>Round-trip airfare from Lahore to Jeddah</li>
        <li>Accommodation in reputable hotels near the holy sites</li>
        <li>Ground transportation between cities and sacred sites</li>
        <li>Guided tours and assistance throughout the journey (Add On)</li>
        <li>Umrah visa processing and assistance with paperwork</li>
        <li>Travel Insurance</li>
      </div>
      <div className="flex flex-col my-2">
        <p className="text-base font-normal mb-2">Please note that the itinerary is subject to change based on local conditions and guidance from the relevant authorities. We are committed to providing you with a safe and comfortable journey, prioritizing your spiritual needs and ensuring your peace of mind throughout the entire pilgrimage.</p>
        <p className="text-base font-normal mb-2">Join us on this transformative 21-day Umrah package 2024 from Lahore and let us accompany you on a remarkable journey of faith. Reserve your place today and experience the blessings and tranquility of performing Umrah. May your pilgrimage be filled with divine blessings, spiritual growth, and cherished memories.</p>
      </div>
      <div>
        <h5>Also Check Our Other 21 Days Umrah 2024 Packages:</h5>
        <div className="gap-1 my-2 flex flex-col">
          <Link href="#" className="text-green-600 hover:underline hover:text-green-700">21 Days Umrah Package From Islamabad</Link>
          <Link href="#" className="text-green-600 hover:underline hover:text-green-700">21 Days Umrah Package From Karachi</Link>
        </div>
        <p className="my-4 text-base font-normal">For more information and booking, please visit our website or contact our dedicated customer service team. We are here to assist you in making this sacred journey a reality.</p>
      </div>
      <div className="text-base font-semibold text-center mb-2 lg:pl-2 lg:pr-10">*Please note that <span className="font-medium">above itinerary is indicative and </span>package price is subject to change and availability. Please contact Customer Support to verify Umrah package rates.</div>
    </div>
  );
};
export default UmrahPackageDetail;