import React from 'react'
import Image from "next/image";

function Contact_section() {
  return (
    <div className="p-8 mb-16">
      <div className="flex flex-col justify-center items-center rounded-lg relative py-28 bg-blue-700">
        <Image
          width={320}
          height={173}
          className="absolute top-0 right-0"
          src="/assets/image/gear-shape.svg"
          alt="gear"
        />

        <p className="text-white text-center font-sans font-bold w-[600px] text-5xl ">
          Need more information about cold email? Just ask
        </p>
        <div className="flex flex-row flex-wrap justify-center pt-12">
          <Image
            width={189}
            height={57}
            className="pl-4"
            src="/assets/image/icon-google-play-store.svg"
            alt="contact_btn"
          />

          <Image
            width={166}
            height={54}
            className="pl-4"
            src="/assets/image/icon-apple-app-store.svg"
            alt="contact_btn"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact_section
