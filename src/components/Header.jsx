import React from "react";

function Header({ name }) {
  return (
    <div className="mb-[6.4rem] grid h-[10.2rem] items-center bg-black md:mb-[12rem] md:h-[24.6rem] lg:mb-[16rem] lg:h-[18rem]">
      <h2 className=" text-5xl uppercase tracking-wider text-center text-white">
        {name}
      </h2>
    </div>
  );
}

export default Header;
