import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import EmailIcon from "@/../public/images/mainPage/emailOrange-icon.png";
import PhoneIcon from "@/../public/images/mainPage/phoneOrange-icon.png";
import Car from "@/../public/images/mainPage/requestPrice/car-image.webp";
import { onInputActive } from "@/helpers/inputMask";
import formsStore from "@/store/formsStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/mainPage/requestForm.module.css";

import PointA from "../../../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointB from "../../../public/images/mainPage/serviceMap/pointB-icon.svg";

export interface IFormData {
	ClientName: string;
	PhoneNumber: string;
	EmailAddress: string;
	ZipFrom: string;
	ZipTo: string;
}

export const validateFirstname = (value: string) => {
	return /^[A-Za-zА-Яа-я\s]{2,}$/.test(value);
};

export const validateEmail = (value: string) => {
	return /^[A-Za-zА-Яа-я0-9._%+-]+@[A-Za-zА-Яа-я0-9.-]+\.[A-Za-zА-Яа-я]{2,}$/.test(
		value,
	);
};

export const validatePhoneNumber = (value: string) => {
	if (value.length != 18) return false;
	if (value[4] == "1") return false;
	return true;
};

const RequestFormMap = () => {
	const [checkbox, setCheckbox] = useState(false);
	return (
		<section className={style.section}>
			<div className="block-container">
				<div className={style.header}>
					<span className={style.preTitle}>request price</span>
					<h2>Your Journey Starts Here</h2>
					<p className={style.text}>
						When it comes to finding the best professional moving companies,
						Star Van Lines Movers stands out from the rest. With our commitment
						to customer satisfaction, reliable services, and nationwide
						coverage, we are your trusted partner for a smooth and efficient
						relocation. Contact us today to experience the Star Van Lines Movers
						difference and make your move a breeze.
					</p>
				</div>
				<div className={style.content}>
					<form
						id="requestForm"
						onSubmit={(e) => {
							if (!checkbox) {
								popupsStore.toastAlert(
									"error",
									"accept the privacy-policy terms",
									5000,
								);
								return;
							}
							if (validatePhoneNumber(formsStore.RequestFormData.PhoneNumber)) {
								formsStore.sendQuote(
									"https://api.starvanlinesmovers.com/send/movingRequest",
									formsStore.RequestFormData,
									"requestForm",
									e,
								);
							} else {
								e.preventDefault();
								popupsStore.toastAlert(
									"error",
									formsStore.RequestFormData.PhoneNumber[4] === "1"
										? "Please enter a valid phone number (invalid area code)"
										: "Please enter a valid phone number",
									10000,
								);
							}
						}}
					>
						<div>
							<div>
								<label htmlFor="name">Full name</label>
								<input
									type="text"
									name="name"
									onChange={(e) => {
										formsStore.RequestFormData.ClientName =
											e.currentTarget.value;
										formsStore.CalculatorData.firstname = e.currentTarget.value;
									}}
									placeholder="Andrew Smith"
									required
								/>
							</div>
							<div>
								<label htmlFor="phone">Phone</label>
								<input
									type="phone"
									name="phone"
									onInput={(e) => {
										formsStore.RequestFormData.PhoneNumber =
											e.currentTarget.value;
										formsStore.CalculatorData.phone1 = e.currentTarget.value;
									}}
									onFocus={(e) => onInputActive(e)}
									data-mask="+1 (000) 000-00-00"
									pattern="\\+1 ([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
									value={formsStore.RequestFormData.PhoneNumber}
									placeholder="+1 (123) 456-7890"
									required
								/>
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									onChange={(e) => {
										formsStore.RequestFormData.EmailAddress =
											e.currentTarget.value;
										formsStore.CalculatorData.email = e.currentTarget.value;
									}}
									placeholder="example@email.com"
									required
								/>
							</div>
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
						<div>
							<div className={style.address}>
								<label htmlFor="landing">Landing address</label>
								<div className={style.input}>
									<Image src={PointA} alt="point A icon" />
									<input
										type="zip"
										name="landing"
										onChange={(e) => {
											formsStore.RequestFormData.ZipFrom =
												e.currentTarget.value;
										}}
										placeholder="ZIP code / city"
										required
									/>
								</div>
							</div>
							<div className={style.address}>
								<label htmlFor="destination">Where are we going?</label>
								<div className={style.input}>
									<Image src={PointB} alt="point B icon" />
									<input
										type="zip"
										name="destination"
										onChange={(e) => {
											formsStore.RequestFormData.ZipTo = e.currentTarget.value;
										}}
										placeholder="ZIP code / city"
										required
									/>
								</div>
							</div>
						</div>
						<div className={style.buttons}>
							<button
								type="submit"
								className={`main ${formsStore.loadingRequest && "loading"}`}
							>
								{formsStore.loadingRequest ? (
									<p>Please wait...</p>
								) : (
									<>
										Send message{" "}
										<Image src={ButtonArrow} alt="arrow right icon" />
									</>
								)}
							</button>
							<Link href="/calculator">
								<button type="button" className="add blue">
									Calculate cost
								</button>
							</Link>
						</div>
					</form>
					<div>
						<div className={style.contacts}>
							<div>
								<Image src={EmailIcon} alt="email icon" />
								<div>
									<h3>Send us an email</h3>
									<p>
										Email us with questions or suggestions and we'll answer
										them!
									</p>
									<a href="mailto:info@starvanlinesmovers.com">
										info@starvanlinesmovers.com{" "}
										<Image src={ButtonArrow} alt="arrow right icon" />
									</a>
								</div>
							</div>
							<div>
								<Image src={PhoneIcon} alt="phone icon" />
								<div>
									<h3>Give us a call</h3>
									<p>
										Call us for details about transportation, storage and costs
									</p>
									<a href="tel:8558222722">
										(855) 822-2722{" "}
										<Image src={ButtonArrow} alt="arrow right icon" />
									</a>
								</div>
							</div>
						</div>
						<div className={style.background}>
							<Image src={Car} alt="car truck image" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequestFormMap;
