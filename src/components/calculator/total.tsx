import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Image from "next/image";

// interfaces
import calculatorStore from "@/store/calculatorStore";
import formsStore from "@/store/formsStore";
import mapStore from "@/store/mapStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/scss/calculator/total.module.scss";

// assets
import ButtonArrow from "../../../public/images/mainPage/button-arrow.svg";
import { NavigationButton } from "../UpdatedCalculator/Navigation/Navigation";
import SliderPagination from "./sliderPagination";

const Total = () => {
	const extrasCalculation = (): number => {
		let extrasCost = 0;

		if (calculatorStore.extras.packaging)
			extrasCost +=
				calculatorStore.currentCubicFeet < calculatorStore.minCubicFeet
					? calculatorStore.minCubicFeet
					: calculatorStore.currentCubicFeet;
		if (calculatorStore.extras.storage) extrasCost += 0;

		return extrasCost;
	};

	const formatDate = (dateString: string) => {
		const dateParts = dateString.split("-");
		const year = dateParts[0];
		const month = dateParts[1];
		const day = dateParts[2];
		const numericMonth = parseInt(month);
		const numericDay = parseInt(day);
		const formattedMonth = String(numericMonth).padStart(2, "0");
		const formattedDay = String(numericDay).padStart(2, "0");
		return `${formattedDay}.${formattedMonth}`;
	};

	return (
		<section className={style.section_}>
			<SliderPagination sliderLenght={4} activeSlide={5} />
			<div className={`block-container ${style.container}`}>
				<h2>The results of the move count</h2>
				<div>
					<div>
						<div className={`${style.information} ${style.cost}`}>
							<div className={style.data}>
								<h3>Cost</h3>
								<p>${calculatorStore.cost.toFixed(0)}</p>
							</div>
						</div>
						<div className={style.information}>
							<div className={style.data}>
								<h3>Total cubic feet</h3>
								<p>{calculatorStore.currentCubicFeet}</p>
							</div>
							<div className={style.data}>
								<h3>Extra services</h3>
								<p>${extrasCalculation()}</p>
							</div>
							<div className={style.data}>
								<h3>
									from {mapStore.postcodes[0]} to {mapStore.postcodes[1]}
								</h3>
								<p>
									{formsStore.CalculatorData.movetime},{" "}
									{formatDate(formsStore.CalculatorData.movedate)}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className={style.information}>
							<div className={style.text}>
								<h3>Contact us!</h3>
								<p>
									90% of the time when sales manager calculates, we give you
									better conditions than the calculator's result. Call now (855)
									822-2722 and get the best rate on the market!
								</p>
							</div>
							<form
								className={style.btnForm}
								onSubmit={(e) => {
									e.preventDefault();
									if (formsStore.CalculatorData.firstname == "-") {
										popupsStore.toastAlert(
											"error",
											"Please complete previous steps",
											10000,
										);
									} else {
										formsStore.sendQuote(
											"https://api.starvanlinesmovers.com/send/calculatorLead",
											formsStore.CalculatorData,
											undefined,
											undefined,
										);
									}
								}}
							>
								<button
									type="submit"
									className={clsx(
										"main",
										formsStore.loadingRequest && "loading",
										formsStore.CalculatorData.firstname == "-" &&
											style.disabled,
									)}
									// onClick={() =>
									// 	formsStore.sendQuote(
									// 		"https://api.starvanlinesmovers.com/send/calculatorLead",
									// 		formsStore.CalculatorData,
									// 		undefined,
									// 		undefined,
									// 	)
									// }
								>
									{formsStore.loadingRequest ? (
										<p>Please wait...</p>
									) : (
										<>
											<p>Get a quote</p>
											<Image src={ButtonArrow} alt="arrow-icon" />
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className={style.navigation}>
				<NavigationButton text="Back" link="/extra-service" />
			</div>
		</section>
	);
};

export default observer(Total);
