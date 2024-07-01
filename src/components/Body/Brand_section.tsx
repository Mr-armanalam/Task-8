import React from "react";
import Image from "next/image";
function Brand_section() {
  return (
    <div className="px-10 ">
      <p className="pb-20 text-gray-500 text-2xl font-sans font-semibold text-center">
        Trusted by the most innovative companies worldwide
      </p>

      <div className="flex flex-row items-center overflow-x-scroll no-scrollbar scroll-smooth pb-10">
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-1.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-2.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-3.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-4.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-5.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className="w-32 mr-32 h-8 mr-32"
          src="/assets/image/brand-6.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-1.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-32"
          src="/assets/image/brand-2.png"
          alt="airbnb"
        />
        <Image
          width={128}
          height={40}
          className=" mr-32 mr-8"
          src="/assets/image/brand-3.png"
          alt="airbnb"
        />
      </div>
    </div>
  );
}

export default Brand_section;
