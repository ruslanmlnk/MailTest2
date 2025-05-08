import { observer } from "mobx-react-lite";
import Image from "next/image";
import { FC, SetStateAction, useCallback, useEffect, useState } from "react";

// assets
import Cross from "@/../public/images/getAQuotePopup/cross.svg";
import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import { onInputActive } from "@/helpers/inputMask";
import { useMobile } from "@/lib/useMobile";
import formsStore from "@/store/formsStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/getAQuotePopup.module.css";

import PointA from "../../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointB from "../../public/images/mainPage/serviceMap/pointB-icon.svg";
import { validatePhoneNumber } from "./map/requestForm";

interface IGetAQuotePopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<SetStateAction<boolean>>;
	text: string;
	display: boolean;
}

const GetAQuotePopup: FC<IGetAQuotePopup> = ({
	isOpened,
	setIsOpened,
	text,
	display,
}) => {
	const isMobile = useMobile();

	useEffect(() => {
		const close = (e: KeyboardEvent) => {
			if (e.keyCode === 27) {
				setIsOpened(false);
			}
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, []);

	return (
		<div
			className={`${style.popup} ${isOpened && style.opened}`}
			onClick={() => setIsOpened(false)}
		>
			<div className={style.content} onClick={(e) => e.stopPropagation()}>
				<Image
					src={Cross}
					alt="exit-icon"
					className={style.cross}
					onClick={() => setIsOpened(false)}
				/>
				{display ? null : <div className={style.image} />}
				<div className={style.form}>
					<p className={style.title}>{text || "Free consultation"}</p>
					{display ? null : (
						<p>
							Enter your phone number and we will call you back for a
							consultation on any moving and storage services
						</p>
					)}
					<form
						id="getAQuoteForm"
						onSubmit={(e) => {
							if (validatePhoneNumber(formsStore.GetAQuoteData.PhoneNumber)) {
								formsStore.sendQuote(
									"https://api.starvanlinesmovers.com/send/movingRequest",
									formsStore.GetAQuoteData,
									"requestForm",
									e,
								);
								formsStore.GetAQuoteData.ClientName = "";
								formsStore.GetAQuoteData.PhoneNumber = "";
								formsStore.GetAQuoteData.EmailAddress = "";
								formsStore.GetAQuoteData.ZipTo = "";
								formsStore.GetAQuoteData.ZipFrom = "";
							} else {
								e.preventDefault();
								popupsStore.toastAlert(
									"error",
									formsStore.GetAQuoteData.PhoneNumber[4] === "1"
										? "Please enter a valid phone number (invalid area code)"
										: "Please enter a valid phone number",
									10000,
								);
							}
						}}
					>
						<div className={style.inptWrapper}>
							<div className={style.addres}>
								<Image src={PointA} alt="point a icon" />
								<input
									type="text"
									name="ZipFrom"
									maxLength={5}
									onChange={(e) => {
										(formsStore.GetAQuoteData.ZipFrom = e.currentTarget.value),
											(formsStore.PreCalculatorData.ZipFrom =
												e.currentTarget.value),
											(formsStore.CalculatorData.fromzip = parseInt(
												e.currentTarget.value,
											));
									}}
									placeholder=" "
									required
									value={formsStore.GetAQuoteData.ZipFrom}
								/>
								<label htmlFor="landing address">Landing address</label>
							</div>
							<div className={style.addres}>
								<Image src={PointB} alt="point b icon" />
								<input
									type="text"
									name="ZipTo"
									maxLength={5}
									onInput={(e) => {
										(formsStore.GetAQuoteData.ZipTo = e.currentTarget.value),
											(formsStore.PreCalculatorData.ZipTo =
												e.currentTarget.value),
											(formsStore.CalculatorData.tozip = parseInt(
												e.currentTarget.value,
											));
									}}
									onFocus={(e) => onInputActive(e)}
									placeholder=""
									required
									value={formsStore.GetAQuoteData.ZipTo}
								/>
								<label htmlFor="Where are we going">Where are we going?</label>
							</div>
						</div>
						<div className={style.inptWrapper}>
							<div>
								<input
									type="text"
									name="name"
									onChange={(e) => {
										formsStore.GetAQuoteData.ClientName = e.currentTarget.value;
										formsStore.PreCalculatorData.ClientName =
											e.currentTarget.value;
										formsStore.CalculatorData.firstname = e.currentTarget.value;
									}}
									placeholder=" "
									required
									value={formsStore.GetAQuoteData.ClientName}
								/>
								<label htmlFor="name">Your name</label>
							</div>
							<div>
								<input
									type="text"
									name="phone"
									onInput={(e) => {
										formsStore.GetAQuoteData.PhoneNumber =
											e.currentTarget.value;
										formsStore.PreCalculatorData.PhoneNumber =
											e.currentTarget.value;
										formsStore.CalculatorData.phone1 = e.currentTarget.value;
									}}
									onFocus={(e) => onInputActive(e)}
									data-mask="+1 (000) 000-00-00"
									pattern="\\+1 ([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
									value={formsStore.GetAQuoteData.PhoneNumber}
									placeholder=""
									required
								/>
								<label htmlFor="phone">Phone</label>
							</div>
							<div>
								<input
									type="email"
									name="email"
									onChange={(e) => {
										formsStore.GetAQuoteData.EmailAddress =
											e.currentTarget.value;
										formsStore.PreCalculatorData.EmailAddress =
											e.currentTarget.value;
										formsStore.CalculatorData.email = e.currentTarget.value;
									}}
									placeholder=" "
									required
									value={formsStore.GetAQuoteData.EmailAddress}
								/>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						{display ? (
							<>
								{isMobile ? (
									<div className={style.formWthPic}>
										<input
											type="zip"
											name="landing"
											onChange={(e) => {
												formsStore.RequestFormData.ZipFrom =
													e.currentTarget.value;
												formsStore.CalculatorData.fromzip = parseInt(
													e.currentTarget.value,
												);
											}}
											placeholder=" "
											required
										/>
										<label htmlFor="landing">Landing address</label>
										<Image src={PointA} alt="point-a-image" />
									</div>
								) : null}
								{isMobile ? (
									<div className={style.formWthPic}>
										<input
											type="zip"
											name="destination"
											onChange={(e) => {
												formsStore.RequestFormData.ZipTo =
													e.currentTarget.value;
												formsStore.CalculatorData.tozip = parseInt(
													e.currentTarget.value,
												);
											}}
											placeholder=" "
											required
										/>
										<label htmlFor="destination">Where are we going?</label>
										<Image src={PointB} alt="point-b-image" />
									</div>
								) : null}
							</>
						) : null}

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
					</form>
				</div>
			</div>
		</div>
	);
};

export default observer(GetAQuotePopup);
