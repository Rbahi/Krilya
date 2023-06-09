import Image from "next/image";
import React from "react";
import { Cairo } from "next/font/google";

const cairo500 = Cairo({
  subsets: ["latin"],
  weight: "500",
});
const cairo700 = Cairo({
  subsets: ["latin"],
  weight: "700",
});

function SmallCard({ img, name }) {
  return (
    <div className="items-center text-center  sm:ml-2 mt-5 rounded-xl mb-2 bg-white cursor-pointer hover:shadow-sm shadow-md sm:hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-20 w-28 sm:h-40 sm:w-64">
        <Image
          src={img}
          layout="fill"
          className="object-cover shadow-sm rounded-t-xl pointer-events-none"
        />
      </div>
      <div>
        <h4 className={`text-gray-800 text-lg ${cairo700.className} py-3`}>
          {name}
        </h4>
      </div>
    </div>
  );
}

export default SmallCard;
