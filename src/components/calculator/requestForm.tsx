import Image from "next/image";
import Link from "next/link";
import React from "react";

import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import EmailIcon from "@/../public/images/mainPage/emailOrange-icon.png";
import PhoneIcon from "@/../public/images/mainPage/phoneOrange-icon.png";
import Car from "@/../public/images/mainPage/requestPrice/car-image.webp";
import { onInputActive } from "@/helpers/inputMask";
import formsStore from "@/store/formsStore";
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

const RequestFormMap = () => {
	return (
		<section className={style.section}>
			<div className="block-container">
				<div className={style.header}>
					<h4>request price</h4>
					<h2>
						Contact Us for a Free <br />
						Moving Estimate
					</h2>
					<h3>
						Ready to experience affordable and reliable moving services? Contact
						Star Van Lines Movers today for a free estimate. Our expert team
						will assess your specific requirements, including long-distance
						moving costs, and provide you with a detailed quote tailored to your
						needs. Trust us to handle your move with professionalism,
						efficiency, and competitive pricing.
					</h3>
				</div>
				<div className={style.content}>
					<form
						id="requestForm"
						// onSubmit={(e) =>
						// 	formsStore.sendQuote(
						// 		'https://api.starvanlinesmovers.com/send/movingRequest',
						// 		formsStore.RequestFormData,
						// 		'requestForm',
						// 		e
						// 	)
						// }
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
									placeholder="+1 (123) 456-7890"
                                    value={formsStore.RequestFormData.PhoneNumber}
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
						<div>
							<div className={style.address}>
								<label htmlFor="landing">Landing address</label>
								<div className={style.input}>
									<Image src={PointA} alt="point-a-icon" />
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
									<Image src={PointB} alt="point-b-icon" />
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
										Send message <Image src={ButtonArrow} alt="arrow-icon" />
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
								<Image src={EmailIcon} alt="email-icon" />
								<div>
									<h3>Send us an email</h3>
									<p>
										Email us with questions or suggestions and we'll answer
										them!
									</p>
									<a href="mailto:info@starvanlinesmovers.com">
										info@starvanlinesmovers.com{" "}
										<Image src={ButtonArrow} alt="arrow-icon" />
									</a>
								</div>
							</div>
							<div>
								<Image src={PhoneIcon} alt="phone-icon" />
								<div>
									<h3>Give us a call</h3>
									<p>
										Call us for details about transportation, storage and costs
									</p>
									<a href="tel:8558222722">
										(855) 822-2722 <Image src={ButtonArrow} alt="arrow-icon" />
									</a>
								</div>
							</div>
						</div>
						<div className={style.background}>
							<Image src={Car} alt="request image SVL" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequestFormMap;
