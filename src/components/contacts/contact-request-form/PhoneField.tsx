import React from "react";

import { onInputActive } from "@/helpers/inputMask";
import formsStore from "@/store/formsStore";
import style from "@/styles/css/contacts/contactWrapperFields.module.css";

const PhoneField = () => {
	const changeHandler = (value: string) => {
		formsStore.ContactRequestData.PhoneNumber =
			formsStore.PreCalculatorData.PhoneNumber =
			formsStore.CalculatorData.phone1 =
				value;
	};

	return (
		<div className={style.field}>
			<label htmlFor="phone">Phone</label>
			<input
				type="phone"
				name="phone"
				onInput={(e) => changeHandler(e.currentTarget.value)}
				onFocus={(e) => onInputActive(e)}
				data-mask="+1 (000) 000-00-00"
				pattern="\\+1 ([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
                value={formsStore.ContactRequestData.PhoneNumber}
				placeholder="+1 (123) 456-7890"
				required
			/>
		</div>
	);
};

export default PhoneField;
