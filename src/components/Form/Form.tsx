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
		watch,
		reset,
		formState: { errors },
	} = useForm<Card>({
		resolver: yupResolver(schema),
	});
	const { setData } = useCard();
	const [completed, setCompleted] = React.useState(false);

	React.useEffect(() => {
		const subscription = watch((value) => {
			if (Object.values(value).length > 0) setData(value as Card);
		});
		return () => subscription.unsubscribe();
	}, [watch, setData]);

	const handleComplete = () => {
		setCompleted(false);
		setData(null);
		reset();
	};

	const onSubmit = () => {
		setCompleted(true);
	};

	return (
		<section className="flex flex-col items-center w-full px-8 py-10 md:py-0 md:justify-center md:min-h-screen">
			{!completed ? (
				<form
					className="max-w-md animate-[fade-in_0.7s_ease_forwards] translate-x-40 opacity-0"
					onSubmit={handleSubmit(onSubmit)}
				>
					<FormFields register={register} errors={errors} />
				</form>
			) : (
				<div className="flex flex-col gap-5 items-center md:justify-center w-full md:min-h-screen px-8 max-w-md py-[33px]">
					<Image src={Icon} alt="violet icon with a white check mark" />
					<h2 className="text-3xl font-medium tracking-wider">THANK YOU!</h2>
					<p className="text-gray-violet-800 text-center">
						We&apos;v added your card details
					</p>
					<button onClick={handleComplete} className="mt-6 btn-primary">
						Continue
					</button>
				</div>
			)}
		</section>
	);
}

export default Form;
