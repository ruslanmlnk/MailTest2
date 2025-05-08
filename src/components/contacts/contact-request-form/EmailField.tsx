import React from "react";

import formsStore from "@/store/formsStore";
import style from "@/styles/css/contacts/contactWrapperFields.module.css";

const EmailField = () => {
	const changeHandler = (value: string) => {
		formsStore.PreCalculatorData.EmailAddress =
			formsStore.ContactRequestData.EmailAddress =
			formsStore.CalculatorData.email =
				value;
	};

	return (
		<div className={style.field}>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				onChange={(e) => changeHandler(e.currentTarget.value)}
				placeholder="example@email.com"
				required
			/>
		</div>
	);
};

export default EmailField;
