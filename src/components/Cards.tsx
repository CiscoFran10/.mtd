import React from "react";

function Cards() {
  return (
    <section className="flex flex-col gap-10 items-end justify-center w-full min-h-screen bg-no-repeat bg-cover bg-desktop">
      <div className="flex flex-col min-w-[440px] min-h-[240px] justify-center p-8 font-normal text-white bg-no-repeat bg-cover rounded-xl bg-card-front overflow-hidden translate-x-40 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-white rounded-full"></span>
          <span className="w-5 h-5 border rounded-full"></span>
        </div>

        <span className="block text-[28px] mt-16 tracking-widest">
          0000 0000 0000 0000
        </span>

        <div className="flex items-center justify-between w-full mt-7 text-base text-gray-violet-100 ">
          <h1 className="tracking-widest uppercase font-medium">
            Jane Appleseed
          </h1>
          <span>00/00</span>
        </div>
      </div>

      <div className="flex flex-col min-w-[440px] min-h-[240px] items-end justify-center p-8 font-normal text-white bg-no-repeat bg-cover rounded-xl bg-card-back overflow-hidden translate-x-64 shadow-xl">
        <span className="block mr-6 text-base">000</span>
      </div>
    </section>
  );
}

export default Cards;
