import { observer } from "mobx-react-lite";
import Image from "next/image";
import { FC, useState } from "react";

// assets
import PointAIcon from "@/../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointBIcon from "@/../public/images/mainPage/serviceMap/pointB-icon.svg";
import formsStore from "@/store/formsStore";
import mapStore, { IUSCities } from "@/store/mapStore";
import style from "@/styles/scss/calculator/addressSelection.module.scss";

import {
	Navigation,
	NavigationButton,
} from "../UpdatedCalculator/Navigation/Navigation";
import { DynamicMap } from "../map/dynamicMap";
import SliderPagination from "./sliderPagination";

const FoundedItemsDropdown: FC<{
	isFoundedItemsDropdownOpened: boolean[];
	setIsFoundedItemsDropdownOpened: React.Dispatch<
		React.SetStateAction<boolean[]>
	>;
	inputValueText: string[];
	setInputValueText: React.Dispatch<React.SetStateAction<string[]>>;
	inputId: number;
}> = ({
	isFoundedItemsDropdownOpened,
	setIsFoundedItemsDropdownOpened,
	inputValueText,
	setInputValueText,
	inputId,
}) => {
	return (
		<div
			className={`${style.dropdown} ${
				isFoundedItemsDropdownOpened[inputId] && style.opened
			}`}
		>
			{mapStore.foundCities.map((item: IUSCities, index) => (
				<div
					onClick={() => {
						if (inputId === 0) {
							setInputValueText([item.zip_code, inputValueText[1]]);
							mapStore.postcodes[inputId] = item.zip_code;
							formsStore.CalculatorData.fromzip = parseInt(item.zip_code);
						} else {
							setInputValueText([inputValueText[0], item.zip_code]);
							mapStore.postcodes[inputId] = item.zip_code;
							formsStore.CalculatorData.tozip = parseInt(item.zip_code);
						}
						setIsFoundedItemsDropdownOpened([false, false]);
					}}
				>
					<p>
						{item.city} ({item.zip_code})
					</p>
				</div>
			))}
		</div>
	);
};

const AddressSelection = () => {
	const [isFoundedItemsDropdownOpened, setIsFoundedItemsDropdownOpened] =
		useState<boolean[]>([false, false]);
	const [inputValueText, setInputValueText] = useState<string[]>(["", ""]);
	return (
		<section className={style.extra_wrapper}>
			<SliderPagination sliderLenght={4} activeSlide={2} />
			<div className={`${style.container}`}>
				<h2>Choose a place and time for the move</h2>
				<p>
					We will send our highly qualified team to this address to perform the
					services you choose.
				</p>
				<div className={style.mapContainerMobile}>
					<div className={style.handicap}></div>
					{/* 				<DynamicMap /> */}
				</div>
				<form>
					<div>
						<p>Where are we moving from?</p>
						<div className={style.input}>
							<Image src={PointAIcon} alt="point-a-icon" />
							<input
								id="point_a"
								type="text"
								placeholder="ZIP code / city"
								required
								value={mapStore.postcodes[0]}
								onChange={(e) => {
									setInputValueText([e.currentTarget.value, inputValueText[1]]);
									mapStore.postcodes[0] = e.currentTarget.value;
									mapStore.searchedText = e.currentTarget.value;
									if (mapStore.foundCities.length > 0)
										setIsFoundedItemsDropdownOpened([true, false]);
								}}
								onFocus={(e) => {
									mapStore.searchedText = e.currentTarget.value;
									if (mapStore.foundCities.length > 0)
										setIsFoundedItemsDropdownOpened([true, false]);
								}}
								onBlur={() => {
									setTimeout(() => {
										setIsFoundedItemsDropdownOpened([false, false]);
									}, 150);
									mapStore.searchedText = "";
								}}
							/>
						</div>
						<FoundedItemsDropdown
							isFoundedItemsDropdownOpened={isFoundedItemsDropdownOpened}
							setIsFoundedItemsDropdownOpened={setIsFoundedItemsDropdownOpened}
							inputValueText={inputValueText}
							setInputValueText={setInputValueText}
							inputId={0}
						/>
					</div>
					<div>
						<p>Where are we moving to?</p>
						<div className={style.input}>
							<Image src={PointBIcon} alt="point-b-icon" />
							<input
								id="point_b"
								type="text"
								placeholder="ZIP code / city"
								required
								value={mapStore.postcodes[1]}
								onChange={(e) => {
									setInputValueText([inputValueText[0], e.currentTarget.value]);
									mapStore.searchedText = e.currentTarget.value;
									mapStore.postcodes[1] = e.currentTarget.value;
									if (mapStore.foundCities.length > 0)
										setIsFoundedItemsDropdownOpened([false, true]);
								}}
								onFocus={(e) => {
									mapStore.searchedText = e.currentTarget.value;

									if (mapStore.foundCities.length > 0)
										setIsFoundedItemsDropdownOpened([false, true]);
								}}
								onBlur={() => {
									setTimeout(() => {
										setIsFoundedItemsDropdownOpened([false, false]);
									}, 150);
									mapStore.searchedText = "";
								}}
							/>
						</div>
						<FoundedItemsDropdown
							isFoundedItemsDropdownOpened={isFoundedItemsDropdownOpened}
							setIsFoundedItemsDropdownOpened={setIsFoundedItemsDropdownOpened}
							inputValueText={inputValueText}
							setInputValueText={setInputValueText}
							inputId={1}
						/>
					</div>
					<div>
						<p>What's the moving day?</p>
						<div className={style.input}>
							<input
								id="point_b"
								className={style.datetime}
								type="date"
								placeholder="01.01.2000"
								value={formsStore.CalculatorData.movedate}
								required
								min={new Date().toISOString().split("T")[0]}
								onChange={(e) => {
									formsStore.CalculatorData.movedate = e.currentTarget.value;
								}}
							/>
						</div>
					</div>
					<div>
						<p>What's the moving day?</p>
						<div className={style.input}>
							<input
								id="point_b"
								className={style.datetime}
								type="time"
								placeholder="10:00"
								value={formsStore.CalculatorData.movetime}
								required
								onChange={(e) => {
									formsStore.CalculatorData.movetime = e.currentTarget.value;
								}}
							/>
						</div>
					</div>
				</form>
				<div className={style.mapContainer}>
					<DynamicMap />
				</div>
				<div className={style.navigation}>
					<NavigationButton text={"Back"} link={"/contact-information"} />
					<NavigationButton text={"Next"} link={"/chose-categories"} next />
				</div>
			</div>
		</section>
	);
};

export default observer(AddressSelection);
