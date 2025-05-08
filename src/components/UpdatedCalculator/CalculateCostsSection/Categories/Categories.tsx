"use client";

import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Image from "next/image";

import tv from "@/../public/images/calculator/emoji/Television.svg";
import appliances from "@/../public/images/calculator/emoji/appialence.svg";
import bedroom from "@/../public/images/calculator/emoji/bedroom.svg";
import boxes from "@/../public/images/calculator/emoji/boxes.svg";
import car from "@/../public/images/calculator/emoji/car.svg";
import chair from "@/../public/images/calculator/emoji/chair.svg";
import dinnig from "@/../public/images/calculator/emoji/dinning-rom.svg";
import family from "@/../public/images/calculator/emoji/family-roms.svg";
import inventory from "@/../public/images/calculator/emoji/inventory.svg";
import kitchen from "@/../public/images/calculator/emoji/kitchen.svg";
import military from "@/../public/images/calculator/emoji/military.svg";
import miscl from "@/../public/images/calculator/emoji/miscl.svg";
import nursery from "@/../public/images/calculator/emoji/nursery.svg";
import office from "@/../public/images/calculator/emoji/office.svg";
import other from "@/../public/images/calculator/emoji/other.svg";
import outdoor from "@/../public/images/calculator/emoji/outdoor.svg";
import sport from "@/../public/images/calculator/emoji/sport.svg";
import SliderPagination from "@/components/calculator/sliderPagination";
import calculatorStore, { IWarehouseItems } from "@/store/calculatorStore";
import warehouseItemsInventory from "@/store/warehouseItemsInventory.json";

import { Navigation } from "../../Navigation/Navigation";
import styles from "./Categories.module.scss";

export interface IElementData {
	categoryTitle: string;
}

export interface IElementProps {
	data: IElementData;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const ICONS = {
	Appliances: appliances,
	Bedroom: bedroom,
	Military: military,
	Miscellaneous: miscl,
	["Den, Office, Study"]: office,
	["Dining Room"]: dinnig,
	["Exercise & Sport Equipment"]: sport,
	Household: chair,
	Inventory: inventory,
	Nursery: nursery,
	["Other items"]: other,
	Kitchen: kitchen,
	["Living & Family Rooms"]: tv,
	["Patio/Garage"]: car,
	["Porch, Outdoor, Furniture & Equipment"]: outdoor,
	Boxes: boxes,
	["Play room"]: family,
};

const Element = observer(({ data, onClick }: IElementProps) => {
	const { categoryTitle } = data;

	let isSelected = calculatorStore
		.getChosenCategories()
		.some((el) => el.category === categoryTitle);

	return (
		<div
			onClick={onClick}
			className={clsx(
				styles.categories_element,
				isSelected ? styles.selected : "",
			)}
		>
			<div className={styles.categories_elememt_wrapper}>
				<Image
					className={styles.categories_element_icon}
					src={ICONS[categoryTitle as keyof typeof ICONS]}
					alt=" "
					width={48}
					height={48}
				/>

				<p>{categoryTitle}</p>
			</div>
		</div>
	);
});

const Categories = () => {
	const {
		chosenCategories,
		removeChosenCategories,
		setChosenCategories,
		getChosenCategories,
	} = calculatorStore;

	const handleClick = (i: number) => {
		if (
			chosenCategories.length &&
			chosenCategories.some(
				(el) => el.category === warehouseItemsInventory[i].category,
			)
		) {
			removeChosenCategories(warehouseItemsInventory[i]);
		} else {
			setChosenCategories(warehouseItemsInventory[i]);
		}
	};

	return (
		<section className={styles.categories}>
			<SliderPagination sliderLenght={4} activeSlide={3} />
			<div className={styles.categories_head}>
				<h1>Calculate moving costs</h1>
				<p>
					Select the <span style={{ color: "#436AE5" }}>categories</span> of
					things you are going to transfer
				</p>
			</div>
			<div className={styles.categories_body}>
				{warehouseItemsInventory &&
					warehouseItemsInventory.map((element, i) => (
						<Element
							key={i}
							data={{
								categoryTitle: element.category,
							}}
							onClick={() => {
								handleClick(i);
							}}
						/>
					))}
			</div>
			<Navigation
				nextBtn={{
					link: "/goods",
					text: "Next",
					isDisabled: getChosenCategories().length === 0,
				}}
				prevBtn={{ link: "/place-and-time", text: "Back" }}
			/>
		</section>
	);
};

export default observer(Categories);
