import React from "react";
import Image from "next/image";
import Logo from "../assets/images/card-logo.svg";
import { useCard } from "@/context/CardContext";

function Cards() {
	const { data } = useCard();
	return (
		<section className="flex flex-col-reverse items-center justify-center w-full px-4 pt-8 bg-no-repeat bg-cover shadow md:flex-col md:gap-10 md:items-end md:min-h-screen bg-desktop md:pl-6 md:px-0 md:pt-0">
			<div className="card -mt-16 md:-mt-0  bg-card-front mr-[10%] md:mr-12 lg:mr-20 p-5 md:p-8 ">
				<Image src={Logo} alt="card logo" className="w-14 lg:w-fit" />

				<h2 className="block text-lg md:text-xl lg:text-[28px] mt-10 md:mt-12 lg:mt-16 tracking-widest">
					{data ? data.cc_number : "0000 0000 0000 0000"}
				</h2>

				<div className="flex items-center justify-between w-full mt-3 md:mt-5 text-xs md:text-sm lg:text-base lg:mt-7 text-gray-violet-100 ">
					<h1 className="font-medium tracking-widest uppercase">
						{data ? data.name : "Jane Appleseed"}
					</h1>
					<span> {data ? `${data.cc_month}/${data.cc_year}` : "00/00"}</span>
				</div>
			</div>

			<div className="card items-end  bg-card-back">
				<span className="block text-sm mr-10 sm:text-base lg:mr-14">
					{data ? data.cc_cvc : "000"}
				</span>
			</div>
		</section>
	);
}

export default Cards;
