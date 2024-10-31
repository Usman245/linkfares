import Link from "next/link";
import React from "react";

const PackagesDetailMiniBanner = () => {
  return (
    <div className="container my-12">
      <div className="bg-[#F5F5F5] text-black border border-[#D9D9D9] rounded py-2 px-4 gap-2">
        <h1 className="text-base font-bold">Maldevis tour Packages</h1>
        <p className="text-base font-normal inset-0">
          The Maldives is a beautiful string of coral islands located in the
          Indian Ocean. It is famous for its stunning beaches, crystal-clear
          waters, and luxuri...{" "}
          <Link href="#" className="text-blue-400">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PackagesDetailMiniBanner;
