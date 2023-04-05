import React from "react";

function Cards() {
	return (
		<section className="flex flex-col-reverse items-center justify-center w-full px-4 pt-8 bg-no-repeat bg-cover shadow md:flex-col md:gap-10 md:items-end md:min-h-screen bg-desktop md:pl-6 md:px-0 md:pt-0">
			<div className="flex flex-col w-[min(300px,100%)] -mt-16 md:-mt-0 sm:w-[350px] lg:w-[440px] aspect-video justify-center p-5 md:p-8 font-normal text-white bg-no-repeat bg-cover rounded-xl bg-card-front overflow-hidden shadow-xl mr-[10%] md:mr-12 lg:mr-20">
				<div className="flex items-center gap-3">
					<span className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full"></span>
					<span className="w-4 h-4 md:w-5 md:h-5 border rounded-full"></span>
				</div>

				<span className="block text-lg md:text-xl lg:text-[28px] mt-10 md:mt-12 lg:mt-16 tracking-widest">
					0000 0000 0000 0000
				</span>

				<div className="flex items-center justify-between w-full mt-3 md:mt-5 text-xs md:text-sm lg:text-base lg:mt-7 text-gray-violet-100 ">
					<h1 className="font-medium tracking-widest uppercase">
						Jane Appleseed
					</h1>
					<span>00/00</span>
				</div>
			</div>

			<div className="flex flex-col w-[min(300px,100%)] sm:w-[360px] lg:w-[440px] aspect-video items-end justify-center font-normal text-white bg-no-repeat bg-cover bg-center rounded-xl bg-card-back overflow-hidden shadow-xl">
				<span className="block text-sm mr-10 sm:text-base lg:mr-14">000</span>
			</div>
		</section>
	);
}

export default Cards;
