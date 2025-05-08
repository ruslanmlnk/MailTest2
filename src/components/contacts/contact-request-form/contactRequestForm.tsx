import { observer } from "mobx-react-lite";
import { useState } from "react";

// mobx
import formsStore from "@/store/formsStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/contacts/contactRequestForm.module.css";

import { validatePhoneNumber } from "../../map/requestForm";
import { tips } from "../lib/tips";
import CommentField from "./CommentField";
import EmailField from "./EmailField";
import FullNameField from "./FullNameField";
import PhoneField from "./PhoneField";
import SubmitButton from "./SubmitButton";
import TipContact from "./TipContact";

const ContactRequestForm = () => {
	const [checkbox, setCheckbox] = useState(false);
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (validatePhoneNumber(formsStore.ContactRequestData.PhoneNumber)) {
			formsStore.sendQuote(
				"https://api.starvanlinesmovers.com/send/contactRequest",
				formsStore.ContactRequestData,
				"contactRequestForm",
				e,
			);
		} else {
			popupsStore.toastAlert(
				"error",
				formsStore.ContactRequestData.PhoneNumber[4] === "1"
					? "Please enter a valid phone number (invalid area code)"
					: "Please enter a valid phone number",
				10000,
			);
		}
	};

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.content}>
					<form id="contactRequestForm" onSubmit={(e) => submitHandler(e)}>
						<div className={style.fields}>
							<FullNameField />
							<EmailField />
							<PhoneField />
						</div>
						<div className={style.checkBoxCt}>
							<input
								name="privacy-policy"
								type="checkbox"
								checked={checkbox}
								required
								onClick={() => setCheckbox((old) => !old)}
							/>
							<label htmlFor="privacy-policy">
								By checking this box, you consent to receive text messages from
								Star Van Lines regarding your inquires, orders, or services. You
								may opt-out at any time by replying STOP. For assistance, text
								HELP. Message and data rates may apply. Messaging frequency may
								vary.
							</label>
						</div>
						<CommentField />
						<SubmitButton />
					</form>
					<div>
						<div className={style.contacts}>
							{tips.map((tip) => (
								<TipContact key={tip.title} {...tip} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default observer(ContactRequestForm);
