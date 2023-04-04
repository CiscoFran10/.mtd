import React from "react";
import Input from "./Input";

function Form() {
  return (
    <section className="min-h-screen w-full pl-32 flex flex-col justify-center items-center">
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

        <div className="flex gap-4">
          <fieldset className="flex">
            <legend>EXP.DATE (MM/YY)</legend>
            <label>
              <span className="sr-only">month</span>
              <Input name="month" placeholder="MM" />
            </label>

            <label>
              <span className="sr-only">year</span>
              <Input name="year" placeholder="YY" />
            </label>
          </fieldset>

          <Input label="cvc" name="cvc" placeholder="e.g. 123" />
        </div>
      </form>
    </section>
  );
}

export default Form;
