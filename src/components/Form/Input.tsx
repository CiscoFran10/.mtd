import React from "react";

interface InputProps {
	label?: string;
	name: string;
	placeholder: string;
	srOnly?: boolean;
}

function Input({ label, name, srOnly, placeholder, ...props }: InputProps) {
	return (
		<label className="block w-full mb-7">
			<span
				className={`text-dark-violet text-sm mb-2 block font-medium uppercase tracking-wider ${
					srOnly && "sr-only"
				}`}
			>
				{label}
			</span>
			<input
				className="block w-full text-base px-4 py-2 font-medium transition duration-300 ease-in-out border rounded-lg shadow-sm focus:border-dark-violet focus:shadow-[0_0_2px_2px_hsl(270,50%,72%)] outline-none hover:border-dark-violet border-gray-violet-100 text-dark-violet placeholder:text-gray-violet-100"
				name={name}
				{...props}
				placeholder={placeholder}
			/>
		</label>
	);
}

export default Input;
