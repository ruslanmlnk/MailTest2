import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
// import BackgroundMobile from "@/../public/images/mainPage/hero_bg-mobile.webp";
// import Background from "@/../public/images/mainPage/hero_bg_1.webp";
import PointA from "@/../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointB from "@/../public/images/mainPage/serviceMap/pointB-icon.svg";
import Tick from "@/../public/images/tick-icon.svg";
import {
	ClientTestimonials,
	TestimonialItem,
} from "@/components/clientTestimonials/clientTestimonials";
import { onInputActive } from "@/helpers/inputMask";
import { quotepopup } from "@/store/calculator/calculatorPageStore";
import formsStore from "@/store/formsStore";
import mapStore from "@/store/mapStore";
import popupsStore from "@/store/popupsStore";
import styles from "@/styles/css/mainPage/new/hero.module.css";

import GetAQuotePopup from "../../getAQuotePopup";
import { validatePhoneNumber } from "../../map/requestForm";
import HeroBackgroundDesktop from "./HeroBackground/HeroBackgroundDesktop";
import HeroBackgroundMobile from "./HeroBackground/HeroBackgroundMobile";

const points: string[] = [
	"A fair moving price",
	"No pitfalls and no overpayments",
	"From $357",
];

const Title = () => (
	<>
		<p className={styles.title}>nationwide moving company</p>
		<h1 className={styles.dnonemobile}>Star Van Lines Movers</h1>
	</>
);

const HeroTop = ({
	setPopup,
	children,
}: {
	setPopup: () => void;
	children?: React.ReactNode;
}) => {
	return (
		<div className={`block-container ${styles.container}`}>
			<div>
				<Title />
				<div className={styles.points}>
					{points.map((point, i) => (
						<div key={i} className={styles.point}>
							<Image src={Tick} alt="point tick icon" />
							<p>{point}</p>
						</div>
					))}
				</div>
				<button className="main" onClick={setPopup}>
					<p>Get a quote</p>
					<Image src={ButtonArrow} alt="arrow right icon" />
				</button>
				{children}
			</div>
		</div>
	);
};

interface IHero {
	isMobile: boolean;
	testimonials?: TestimonialItem[];
}

const Hero = ({ isMobile, testimonials }: IHero) => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	const setPopup = () => {
		setIsPopupOpened(true);
	};

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={quotepopup.text}
				display={true}
			/>
			<section className={styles.hero}>
				{/* <Image
					quality={100}
					loading="lazy"
					src={isDisplay ? BackgroundMobile : Background}
					alt="Star Van Lines Movers"
					className={styles.background}
				/> */}
				{isMobile ? (
					<HeroBackgroundMobile className={styles.background} />
				) : (
					<HeroBackgroundDesktop className={styles.background} />
				)}
				<HeroTop setPopup={setPopup}>
					{testimonials && testimonials.length > 0 && (
						<ClientTestimonials
							TestimonialItems={testimonials}
                            className={styles.testimonials}
						/>
					)}
				</HeroTop>
				<div className={styles.form}>
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
						<h2>Calculate moving costs in 1 minute</h2>
						<div>
							<div>
								<label htmlFor="name">Full name</label>
								<input
									type="text"
									name="name"
									onChange={(e) => {
										formsStore.RequestFormData.ClientName =
											e.currentTarget.value;
										formsStore.PreCalculatorData.ClientName =
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
									type="text"
									name="phone"
									onInput={(e) => {
										formsStore.RequestFormData.PhoneNumber =
											e.currentTarget.value;
										formsStore.PreCalculatorData.PhoneNumber =
											e.currentTarget.value;
										formsStore.CalculatorData.phone1 = e.currentTarget.value;
									}}
									onFocus={(e) => onInputActive(e)}
                                    value={formsStore.RequestFormData.PhoneNumber}
									data-mask="+1 (000) 000-00-00"
									pattern="\\+1 ([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
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
										formsStore.RequestFormData.EmailAddress =
											e.currentTarget.value;
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
											formsStore.RequestFormData.ZipFrom =
												e.currentTarget.value;
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
										Get a qoute{" "}
										<Image src={ButtonArrow} alt="arrow right image" />
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
			</section>
		</>
	);
};

export default Hero;
