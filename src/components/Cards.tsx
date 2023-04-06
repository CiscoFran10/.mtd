import React from "react";
import Image from "next/image";
import Logo from "../assets/images/card-logo.svg";
import { useCard } from "@/context/CardContext";

function Cards() {
	const { data } = useCard();

	const normalizeMonth = data?.cc_month.toString().padStart(2, "0");
	const letters = data?.cc_number
		.toString()
		.split(" ")
		.map((item) => item.split(""));

	return (
		<section className="flex flex-col-reverse items-center justify-center w-full px-4 pt-8 bg-no-repeat bg-cover shadow md:flex-col md:gap-10 md:items-end md:min-h-screen bg-desktop md:pl-6 md:px-0 md:pt-0 animate-[bg-position_1.5s_ease] transition duration-300">
			<div className="card -mt-16 md:-mt-0  bg-card-front mr-[10%] md:mr-12 lg:mr-20 p-5 md:p-8 tracking-widest -translate-x-40 animate-[fade-in_1s_ease_forwards_0.3s] opacity-0">
				<Image src={Logo} alt="card logo" className="w-14 lg:w-fit" />

				<h2 className="flex items-center gap-[10px] h-full text-lg md:text-xl lg:text-[28px] mt-10 md:mt-12 lg:mt-16 ">
					{(data?.cc_number &&
						letters?.map((group, index) => (
							<div className="flex gap-[1px]" key={index}>
								{group.map((letter, index) => (
									<span key={index} className="letters">
										{letter}
									</span>
								))}
							</div>
						))) ||
						"0000 0000 0000 0000"}
				</h2>

				<div className="flex items-center justify-between w-full mt-3 md:mt-5 text-xs md:text-sm lg:text-base lg:mt-7 text-gray-violet-100 ">
					<h1 className="font-medium  uppercase">
						{data?.name || "Jane Appleseed"}
					</h1>
					<span> {`${normalizeMonth || "00"}/${data?.cc_year || "00"}`}</span>
				</div>
			</div>

			<div className="card items-end  bg-card-back tracking-widest translate-x-40 animate-[fade-in_1s_ease_forwards_0.3s] opacity-0">
				<span className="block text-sm mr-10 sm:text-base lg:mr-14">
					{data?.cc_cvc || "000"}
				</span>
			</div>
		</section>
	);
}

export default Cards;
