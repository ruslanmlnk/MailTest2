import React from "react";

import formsStore from "@/store/formsStore";
import style from "@/styles/css/contacts/contactWrapperFields.module.css";

const FullNameField = () => {
	const changeHandler = (value: string) => {
		formsStore.ContactRequestData.ClientName =
			formsStore.PreCalculatorData.ClientName =
			formsStore.CalculatorData.firstname =
				value;
	};

	return (
		<div className={style.field}>
			<label htmlFor="name">Full name</label>
			<input
				type="text"
				name="name"
				onChange={(e) => changeHandler(e.currentTarget.value)}
				placeholder="Andrew Smith"
				required
			/>
		</div>
	);
};

export default FullNameField;
