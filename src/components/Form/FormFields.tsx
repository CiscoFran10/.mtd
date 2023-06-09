import { Card } from "@/context/CardContext";

import Input from "./Input";
import InputMask from "react-input-mask";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import * as yup from "yup";

interface FormFieldsProps {
	register: UseFormRegister<Card>;
	errors: FieldErrors<Card>;
}

function FormFields({ register, errors }: FormFieldsProps) {
	return (
		<>
			<Input
				mask=""
				label="cardholder name"
				name="name"
				placeholder="e.g. Jane Appleseed"
				register={register}
				errors={errors}
			/>

			<Input
				mask="**** **** **** ****"
				label="card number"
				name="cc_number"
				placeholder="e.g. 1234 5578 9123 0000"
				register={register}
				errors={errors}
			/>

			<div className="flex gap-6">
				<fieldset>
					<legend className="block mb-2 text-sm font-medium tracking-wider uppercase text-dark-violet ">
						EXP.DATE (MM/YY)
					</legend>
					<div className="flex gap-3">
						<label>
							<span className="sr-only">Month</span>
							<InputMask
								className={`input ${errors.cc_month && "border-red"}`}
								mask="99"
								placeholder="MM"
								{...register("cc_month")}
							/>
						</label>

						<label>
							<span className="sr-only">Year</span>
							<InputMask
								className={`input ${errors.cc_year && "border-red"}`}
								mask="99"
								placeholder="YY"
								{...register("cc_year")}
							/>
						</label>
					</div>
					{(errors.cc_month || errors.cc_year) && (
						<p className="text-red text-sm mt-2">
							{errors.cc_month?.message || errors.cc_year?.message}
						</p>
					)}
				</fieldset>

				<Input
					mask="999"
					name={"cc_cvc"}
					label="cvc"
					placeholder="e.g. 123"
					register={register}
					errors={errors}
				/>
			</div>
			<button className="btn-primary">Confirm</button>
		</>
	);
}

export default FormFields;

export const schema = yup.object().shape({
	name: yup.string().required("Can't be blank"),
	cc_number: yup
		.string()
		.required("Can't be blank")
		.matches(/^[\d ]*$/, "Wrong format, numbers only"),
	cc_month: yup
		.number()
		.transform((value) => (Number.isNaN(value) ? null : value))
		.nullable()
		.required("Can't be blank")
		.max(12, "Invalid exp. date")
		.min(1),
	cc_year: yup
		.number()
		.transform((value) => (Number.isNaN(value) ? null : value))
		.nullable()
		.required("Can't be blank")
		.min(23, "Invalid year"),
	cc_cvc: yup.string().required("Can't be blank"),
});
