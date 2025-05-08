import clsx from "clsx";
import Image from "next/image";
import React from "react";

import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import PointA from "@/../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointB from "@/../public/images/mainPage/serviceMap/pointB-icon.svg";
import { onInputActive } from "@/helpers/inputMask";
import formsStore from "@/store/formsStore";
import mapStore from "@/store/mapStore";
import popupsStore from "@/store/popupsStore";

import { validatePhoneNumber } from "../map/requestForm";
import styles from "./MainPageForm.module.scss";
import { action } from "mobx";

interface MainPageForm {
	inHero?: boolean;
	className?: string;
	name?: string;
}

export const MainPageForm = ({ inHero, className, name }: MainPageForm) => {
	return (
		<div className={clsx(styles.form, inHero ? styles.inHero : "", className)}>
			<form
				id="requestForm"
				onSubmit={(e) => {
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
				{name ? (
					<h2>Calculate moving costs in {name} in 1 minute</h2>
				) : (
					<h2>Calculate moving costs in 1 minute</h2>
				)}
				<div>
					<div>
						<label htmlFor="name">Full name</label>
						<input
							type="text"
							name="name"
							onChange={(e) => {
								formsStore.RequestFormData.ClientName = e.currentTarget.value;
								formsStore.PreCalculatorData.ClientName = e.currentTarget.value;
								formsStore.CalculatorData.firstname = e.currentTarget.value;
							}}
							placeholder="Andrew Smith"
							required
						/>
					</div>
					<div>
						<label htmlFor="phone">Phone</label>
						<input
							type="text"
							name="phone"
							onInput={action((e) => {
								formsStore.RequestFormData.PhoneNumber = e.currentTarget.value;
								formsStore.PreCalculatorData.PhoneNumber =
									e.currentTarget.value;
								formsStore.CalculatorData.phone1 = e.currentTarget.value;
								console.log(formsStore.RequestFormData.PhoneNumber);
							})}
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
								formsStore.PreCalculatorData.EmailAddress =
									e.currentTarget.value;
								formsStore.RequestFormData.EmailAddress = e.currentTarget.value;
								formsStore.CalculatorData.email = e.currentTarget.value;
							}}
							placeholder="example@email.com"
							required
						/>
					</div>
					<div className={styles.address}>
						<label htmlFor="landing">Landing address</label>
						<div className={styles.input}>
							<Image src={PointA} alt="point a icon" />
							<input
								type="zip"
								name="landing"
								onChange={(e) => {
									formsStore.RequestFormData.ZipFrom = e.currentTarget.value;
									formsStore.CalculatorData.fromzip = parseInt(
										e.currentTarget.value,
									);
									mapStore.postcodes[0] = e.currentTarget.value;
								}}
								placeholder="ZIP code / city"
								required
							/>
						</div>
					</div>
					<div className={styles.address}>
						<label htmlFor="destination">Where are we going?</label>
						<div className={styles.input}>
							<Image src={PointB} alt="point b icon" />
							<input
								type="zip"
								name="destination"
								onChange={(e) => {
									formsStore.RequestFormData.ZipTo = e.currentTarget.value;
									formsStore.CalculatorData.tozip = parseInt(
										e.currentTarget.value,
									);
									mapStore.postcodes[1] = e.currentTarget.value;
								}}
								placeholder="ZIP code / city"
								required
							/>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<button
						type="submit"
						className={`main ${formsStore.loadingRequest && "loading"}`}
					>
						{formsStore.loadingRequest ? (
							<p>Please wait...</p>
						) : (
							<>
								Get a qoute <Image src={ButtonArrow} alt="arrow right image" />
							</>
						)}
					</button>
					{/* <Link href="/calculator">
								<button type="button" className="add blue">
									Calculate cost
								</button>
							</Link> */}
				</div>
			</form>
		</div>
	);
};
