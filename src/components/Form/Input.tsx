import { Card } from "@/context/CardContext";

import InputMask from "react-input-mask";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface InputProps {
	label: string;
	name: Path<Card>;
	placeholder: string;
	errors: FieldErrors<Card>;
	mask: string;
	register: UseFormRegister<Card>;
}

const Input = ({
	label,
	errors,
	name,
	mask,
	placeholder,
	register,
	...props
}: InputProps) => {
	return (
		<label className="block w-full mb-7">
			<span className="text-dark-violet text-sm mb-2 block font-medium uppercase tracking-wider">
				{label}
			</span>
			<InputMask
				mask={mask}
				maskPlaceholder={""}
				placeholder={placeholder}
				{...register(name)}
				className={`input ${errors[name] && "border-red"}`}
				{...props}
			/>
			{errors && (
				<p className="text-red text-sm mt-2">{errors[name]?.message}</p>
			)}
		</label>
	);
};

Input.displayName = "Input";

export default Input;
