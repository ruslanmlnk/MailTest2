"use client";

import clsx from "clsx";
import { observer } from "mobx-react-lite";
import next from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

import nextIcon from "@/../public/images/calculator/btn-next-arr.svg";
import { onInputActive } from "@/helpers/inputMask";
// interfaces
import formsStore from "@/store/formsStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/scss/calculator/clientData.module.scss";

import {
	validateEmail,
	validateFirstname,
	validatePhoneNumber,
} from "../map/requestForm";
import SliderPagination from "./sliderPagination";

const ClientData = observer(() => {
	const { push } = useRouter();

	const isDataValid =
		validateFirstname(formsStore.CalculatorData.firstname) &&
		validatePhoneNumber(formsStore.CalculatorData.phone1) &&
		validateEmail(formsStore.CalculatorData.email);

	const validateClientData = () => {
		if (isDataValid) {
			// formsStore.quietSendQuote(
			// 	"https://api.starvanlinesmovers.com/send/newQuote",
			// 	formsStore.PreCalculatorData,
			// 	undefined,
			// );
			push("/place-and-time");
			return true;
		}
		if (!validateFirstname(formsStore.CalculatorData.firstname)) {
			popupsStore.toastAlert(
				"error",
				"Please enter a valid name (minimum length is 2 letters, latin or cyrillic alphabet)",
				10000,
			);
		} else if (!validatePhoneNumber(formsStore.CalculatorData.phone1)) {
			popupsStore.toastAlert(
				"error",
				formsStore.CalculatorData.phone1[4] === "1"
					? "Please enter a valid phone number (invalid area code)"
					: "Please enter a valid phone number",
				10000,
			);
		} else if (!validateEmail(formsStore.CalculatorData.email)) {
			popupsStore.toastAlert(
				"error",
				"Please enter a valid email address",
				10000,
			);
		}
		return false;
	};
	return (
		<section className={style.extra_wrapper}>
			<SliderPagination sliderLenght={4} activeSlide={1} />
			<div className={`block-container ${style.container}`}>
				<h2>Enter your contact information</h2>
				<p>
					What email address and phone number can we use to report your request?
				</p>
				<form>
					<div>
						<input
							type="text"
							name="name"
							placeholder=" "
							required
							value={formsStore.PreCalculatorData.ClientName}
							onChange={(e) => {
								formsStore.CalculatorData.firstname = e.currentTarget.value;
								formsStore.PreCalculatorData.ClientName = e.currentTarget.value;
							}}
						/>
						<label htmlFor="name">Your name</label>
					</div>
					<div>
						<input
							type="text"
							name="phone"
							placeholder=" "
							required
							value={formsStore.PreCalculatorData.PhoneNumber}
							onInput={(e) => {
								formsStore.CalculatorData.phone1 = e.currentTarget.value;
								formsStore.PreCalculatorData.PhoneNumber =
									e.currentTarget.value;
							}}
							onFocus={(e) => onInputActive(e)}
							data-mask="+1 (000) 000-00-00"
							pattern="\\+1 ([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
						/>
						<label htmlFor="phone">Phone</label>
					</div>
					<div>
						<input
							type="email"
							name="email"
							placeholder=" "
							required
							value={formsStore.PreCalculatorData.EmailAddress}
							onChange={(e) => {
								formsStore.CalculatorData.email = e.currentTarget.value;
								formsStore.PreCalculatorData.EmailAddress =
									e.currentTarget.value;
							}}
						/>
						<label htmlFor="email">Email</label>
					</div>
				</form>
			</div>
			<div className={style.navigation}>
				<button
					className={clsx(style.next_btn, !isDataValid ? style.disabled : "")}
					style={{ color: "#fff" }}
					onClick={validateClientData}
				>
					{"Next"}
					<Image src={nextIcon} alt="icon" width={11} height={18} />
				</button>
			</div>
		</section>
	);
});

export default ClientData;
