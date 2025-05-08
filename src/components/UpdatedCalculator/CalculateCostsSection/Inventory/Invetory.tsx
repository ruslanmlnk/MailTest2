import { observer } from "mobx-react-lite";
import Image from "next/image";
import React, { use, useState } from "react";

import SliderPagination from "@/components/calculator/sliderPagination";
import calculatorStore, {
	IInventoryItem,
	IWarehouseItems,
} from "@/store/calculatorStore";

import minus from "../../../../../public/images/calculator/minus-light.svg";
import plus from "../../../../../public/images/calculator/plus-light.svg";
import trashBox from "../../../../../public/images/calculator/trash-icon.svg";
import { Navigation } from "../../Navigation/Navigation";
import styles from "./Invenory.module.scss";

interface IInventoryRowParams {
	inventoryItem: IInventoryItem;
	setLocalStorage: Function;
	localStorage: IInventoryItem[];
	index: number;
	isAllDisabled: boolean;
	setIsAllDisabled: Function;
	isAllChecked: boolean;
	setIsAllcheked: Function;
}

const InventoryRow = observer(
	({
		inventoryItem,
		setLocalStorage,
		index,
		localStorage,
		isAllDisabled,
		setIsAllDisabled,
		isAllChecked,
		setIsAllcheked,
	}: IInventoryRowParams) => {
		const { item, quantity } = inventoryItem;
		const [isChecked, setIsCheked] = useState(isAllChecked);
		const {
			increaseItemInInventory,
			decreaseItemInInventory,
			clientInventory,
		} = calculatorStore;

		const isInClientInventory = (name: string) => {
			let is = false;
			localStorage.forEach((item) => {
				if (item.item.itemName === name) is = true;
			});
			return is;
		};

		const handleClicklIncrease = () => increaseItemInInventory(item);
		const handleClicllDecrease = () => {
			const isDeleted = decreaseItemInInventory(item);

			if (isDeleted) {
				setLocalStorage((old: IInventoryItem[]) =>
					old.filter((el) => el.item.itemName !== item.itemName),
				);
			}
		};

		const handleCheckBox = (cheked: boolean) => {
			setIsCheked(cheked);
			setIsAllDisabled(false);

			if (!cheked) {
				setIsAllcheked(false);
				setLocalStorage((old: IInventoryItem[]) => [
					...old.filter((el) => el.item.itemName !== item.itemName),
				]);
			} else {
				setLocalStorage((old: IInventoryItem[]) => [
					...old,
					clientInventory.find((el) => el.item.itemName === item.itemName),
				]);
			}
		};

		return (
			<div className={styles.inventory_row}>
				<form className={styles.inventory_row_left_side} action="">
					<input
						checked={isInClientInventory(inventoryItem.item.itemName)}
						defaultChecked={isInClientInventory(inventoryItem.item.itemName)}
						type="checkbox"
						id="item-checkbox"
						onChange={(e) => handleCheckBox(e.target.checked)}
					/>
					<label htmlFor="item-checkbox">{item.itemName}</label>
				</form>
				<div className={styles.inventory_row_right_side}>
					<button
						style={{
							border: "none",
							background: "transparent",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						disabled={isAllDisabled}
					>
						<Image
							onClick={
								isAllChecked
									? handleClicllDecrease
									: isChecked
									? handleClicllDecrease
									: () => {}
							}
							src={minus}
							alt="plus-icon"
							width={25}
							height={25}
							style={{ cursor: isChecked ? "pointer" : "unset" }}
						/>
					</button>
					<div className={styles.amount}>
						<p>{quantity}</p>
					</div>
					<button
						style={{
							border: "none",
							background: "transparent",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						disabled={isAllDisabled}
					>
						<Image
							onClick={
								isAllChecked
									? handleClicklIncrease
									: isChecked
									? handleClicklIncrease
									: () => {}
							}
							src={plus}
							alt="minus-icon"
							width={25}
							height={25}
							style={{ cursor: isChecked ? "pointer" : "unset" }}
						/>
					</button>
				</div>
			</div>
		);
	},
);

const Invetory = () => {
	const {
		clientInventory,

		setClientInventory,
		clearSomeItems,
	} = calculatorStore;

	const [checkedItems, setCheckedItems] = useState<IInventoryItem[]>([
		...clientInventory,
	]);
	const [isAllDisabled, setIsAllDisabled] = useState(false);
	const [isAllChecked, setIsAllcheked] = useState(true);

	const geTotalCubicFeet = () => {
		if (checkedItems.length !== 0) {
			return checkedItems.reduce(function (sum, { quantity, cubicFeet }) {
				return sum + quantity * cubicFeet;
			}, 0);
		}
		return 0;
	};
	const getTotalItems = () => {
		if (checkedItems.length !== 0) {
			return checkedItems.reduce(function (sum, { quantity }) {
				return sum + quantity;
			}, 0);
		}
		return 0;
	};

	const handleCheckBox = (checked: boolean) => {
		if (checked) {
			setCheckedItems(clientInventory);
			setIsAllDisabled(false);
			setIsAllcheked(true);
		} else {
			setCheckedItems([]);
			setIsAllDisabled(true);
			setIsAllcheked(false);
		}
	};

	return (
		<section className={styles.inventory}>
			<SliderPagination sliderLenght={4} activeSlide={3} />
			<h1 style={{ textAlign: "center" }}>Calculate moving costs</h1>
			<div className={styles.inventory_content}>
				<div className={styles.inventory_content_head}>
					<form className={styles.left_side} action="">
						<input
							type="checkbox"
							id="inventory"
							checked={checkedItems.length === clientInventory.length}
							onChange={(e) => handleCheckBox(e.target.checked)}
						/>
						<label htmlFor="inventory">Inventory</label>
					</form>
					<div className={styles.right_side}>
						<p>
							{"Total cubic feet: "}
							<span style={{ color: "#436AE5" }}>{geTotalCubicFeet()}</span>
						</p>
						<p>
							{"Total items: "}
							<span style={{ color: "#436AE5" }}>{getTotalItems()}</span>
						</p>
						<Image
							onClick={() => {
								clearSomeItems(checkedItems);
								setCheckedItems([]);
								setIsAllDisabled(true);
							}}
							style={{ cursor: "pointer" }}
							src={trashBox}
							alt="delete-button-icon"
							height={35}
							width={35}
						/>
					</div>
				</div>
				<div className={styles.user_inventory}>
					{clientInventory &&
						clientInventory.map((item, i) => (
							<InventoryRow
								isAllDisabled={isAllDisabled}
								setLocalStorage={setCheckedItems}
								setIsAllDisabled={setIsAllDisabled}
								localStorage={checkedItems}
								isAllChecked={isAllChecked}
								inventoryItem={item}
								setIsAllcheked={setIsAllcheked}
								index={i}
								key={i}
							/>
						))}
				</div>
			</div>
			<Navigation
				onClick={() => {
					setClientInventory(checkedItems);
				}}
				nextBtn={{
					link: "/extra-service",
					text: "Good!",
					isDisabled: checkedItems.length === 0,
				}}
				prevBtn={{ link: "/goods", text: "Back" }}
				isHovertinContent
			/>
		</section>
	);
};

export default observer(Invetory);
