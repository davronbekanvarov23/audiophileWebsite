import React from "react";

function MainFooter() {
  return (
    <div className="align-content mb-[12rem] grid justify-items-center md:mb-[9.6rem] lg:mb-[20rem]  lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:justify-items-start lg:gap-[2rem]">
      <div className="max-w-[57.3rem] lg:max-w-[44.5rem]">
        <h2 className=" font-bold text-5xl uppercase mb-[3.2rem] text-center lg:text-left">
          Bringing you the <span className=" text-orange-500">best</span> audio
          gear
        </h2>
        <p className="text-center text-base text-black/50 lg:text-left w-[445px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <figure className="lg:size-[550px] ">
        <img
          className="rounded-lg "
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
        />
      </figure>
    </div>
  );
}

export default MainFooter;
