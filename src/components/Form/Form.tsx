import React from "react";
import Input from "./Input";

function Form() {
	return (
		<section className="flex flex-col items-center md:justify-center w-full md:min-h-screen px-8">
			<form className="max-w-md">
				<Input
					label="cardholder name"
					name="name"
					placeholder="e.g. Jane Appleseed"
				/>

				<Input
					label="card number"
					name="card_number"
					placeholder="e.g. 1234 5578 9123 0000"
				/>

				<div className="flex gap-6">
					<fieldset className="flex gap-3">
						<legend className="block mb-2 text-sm font-medium tracking-wider uppercase text-dark-violet ">
							EXP.DATE (MM/YY)
						</legend>
						<Input label="month" name="month" placeholder="MM" srOnly />

						<Input label="year" name="year" placeholder="YY" srOnly />
					</fieldset>

					<Input label="cvc" name="cvc" placeholder="e.g. 123" />
				</div>
				<button className="bg-dark-violet text-gray-violet-100 tracking-wider w-full px-3 py-3.5 rounded-lg transition duration-300 ease-in-out hover:bg-gradient-to-r from-dark-violet to-gray-violet-300 focus:bg-gradient-to-r outline-none focus:border-dark-violet focus:shadow-[0_0_2px_2px_hsl(270,50%,72%)] hover:text-white focus:text-white">
					Confirm
				</button>
			</form>
		</section>
	);
}

export default Form;
