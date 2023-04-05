import React from "react";
import Image from "next/image";
import Icon from "../../assets/images/icon-complete.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card, useCard } from "@/context/CardContext";
import FormFields, { schema } from "./FormFields";

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Card>({
		resolver: yupResolver(schema),
		mode: "onChange",
	});
	const { setData, data } = useCard();
	const [completed, setCompleted] = React.useState(true);

	const onSubmit = () => {
		setCompleted(true);
	};

	const handleComplete = () => {
		setCompleted(false);
	};

	return (
		<section className="flex flex-col items-center md:justify-center w-full md:min-h-screen px-8">
			{!completed ? (
				<form className="max-w-md" onSubmit={handleSubmit(onSubmit)}>
					<FormFields register={register} errors={errors} />
				</form>
			) : (
				<div className="flex flex-col gap-5 items-center md:justify-center w-full md:min-h-screen px-8 max-w-md py-[33px]">
					<Image src={Icon} alt="violet icon with a white check mark" />
					<h2 className="text-3xl font-medium tracking-wider">THANK YOU!</h2>
					<p className="text-gray-violet-800">
						We&apos;v added your card details
					</p>
					<button onClick={handleComplete} className="btn-primary mt-6">
						Continue
					</button>
				</div>
			)}
		</section>
	);
}

export default Form;
