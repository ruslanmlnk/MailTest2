import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// assets
import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import PointA from "@/../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointB from "@/../public/images/mainPage/serviceMap/pointB-icon.svg";
import Tick from "@/../public/images/tick-icon.svg";
import { onInputActive } from "@/helpers/inputMask";
import { useMobile } from "@/lib/useMobile";
import { quotepopup } from "@/store/calculator/calculatorPageStore";
// mobx
import formsStore from "@/store/formsStore";
import mapStore from "@/store/mapStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/mainPage/first.module.css";

// components
import GetAQuotePopup from "../getAQuotePopup";
import { validatePhoneNumber } from "../map/requestForm";

const First = () => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	const isMobile = useMobile();
	const videoRef = useRef<HTMLVideoElement | null>(null);

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={quotepopup.text}
				display={true}
			/>
			<section className={style.section}>
				{isMobile ? (
					<video
						className={style.videoMobile}
						ref={videoRef}
						autoPlay
						muted
						playsInline
					>
						<source src={"/first_mobile.mp4" + "#t=0.01"} type="video/mp4" />
					</video>
				) : (
					<video
						className={style.video}
						ref={videoRef}
						autoPlay
						muted
						playsInline
					>
						<source src={"/first.mp4" + "#t=0.01"} type="video/mp4" />
					</video>
				)}
				<div className={`block-container ${style.container}`}>
					<div className={style.usp}>
						<h1>
							Careful private and <br /> commercial moves from <br /> the
							<span> experts </span>
							of the market
						</h1>
						<div className={style.points}>
							<div>
								<Image src={Tick} alt="" />
								<h3>Licensed movers</h3>
							</div>
							<div>
								<Image src={Tick} alt="" />
								<h3>Full insurance</h3>
							</div>
						</div>
						<button className="main" onClick={() => setIsPopupOpened(true)}>
							<p>Get a quote</p>
							<Image src={ButtonArrow} alt="" />
						</button>
					</div>
					<div className={style.form}>
						<form
							id="requestForm"
							onSubmit={(e) => {
								if (
									validatePhoneNumber(formsStore.RequestFormData.PhoneNumber)
								) {
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
											formsStore.CalculatorData.firstname =
												e.currentTarget.value;
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
											formsStore.RequestFormData.EmailAddress =
												e.currentTarget.value;
											formsStore.CalculatorData.email = e.currentTarget.value;
										}}
										placeholder="example@email.com"
										required
									/>
								</div>
								<div className={style.address}>
									<label htmlFor="landing">Landing address</label>
									<div className={style.input}>
										<Image src={PointA} alt="" />
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
								<div className={style.address}>
									<label htmlFor="destination">Where are we going?</label>
									<div className={style.input}>
										<Image src={PointB} alt="" />
										<input
											type="zip"
											name="destination"
											onChange={(e) => {
												formsStore.RequestFormData.ZipTo =
													e.currentTarget.value;
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
							<div className={style.buttons}>
								<button
									type="submit"
									className={`main ${formsStore.loadingRequest && "loading"}`}
								>
									{formsStore.loadingRequest ? (
										<p>Please wait...</p>
									) : (
										<>
											Send message <Image src={ButtonArrow} alt="" />
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
					</div>
					<div className={style.stats}>
						<div>
							<h2>4,9/5</h2>
							<p>
								NPS rating of clients <br /> about our services
							</p>
						</div>
						<div>
							<h2>1 hour</h2>
							<p>
								From the order to the <br /> arrival of our movers
							</p>
						</div>
						<div>
							<h2>-10%</h2>
							<p>
								Discount for <br /> ordering in advance
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default observer(First);
