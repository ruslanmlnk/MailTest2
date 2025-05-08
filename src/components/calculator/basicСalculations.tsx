import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useEffect, useState } from "react";

import AddIcon from "@/../public/images/calculator/add-icon.svg";
import DropdownIcon from "@/../public/images/calculator/dropdown-icon.svg";
import MinusIcon from "@/../public/images/calculator/minus-icon.svg";
import PlusIcon from "@/../public/images/calculator/plus-icon.svg";
// assets
import SearchIcon from "@/../public/images/calculator/search-icon.svg";
import TrashIcon from "@/../public/images/calculator/trash-icon.svg";
// data
import calculatorStore, {
	IWarehouseItem,
	IWarehouseItems,
} from "@/store/calculatorStore";
import warehouseItemsInventory from "@/store/warehouseItemsInventory.json";
import style from "@/styles/css/calculator/basicCalculations.module.css";

const BasicСalculations = () => {
	const [isDropdownOpened, setIsDropdownOpened] = useState(false);

	const [currentCategory, setCurrentCategory] = useState<
		IWarehouseItems["category"] | null
	>(null);
	const [checkedItems, setCheckedItems] = useState<
		IWarehouseItem["itemName"][]
	>([]);
	const [searchText, setSearchText] = useState<string | null>(null);
	const [foundItems, setFoundItems] = useState<IWarehouseItem[]>([]);
	const [selectAllChecked, setSelectAllChecked] = useState(false);

	const searchItems = (searchText: string) => {
		const items = (): IWarehouseItem[] => {
			let itemsArray: IWarehouseItem[] = [];

			warehouseItemsInventory.map((warehouseItem) => {
				warehouseItem.items.map((item) => {
					if (item.itemName.toLowerCase().includes(searchText.toLowerCase()))
						itemsArray.push(item);
				});
			});

			return itemsArray;
		};

		if (items().length == 0) setFoundItems([]);
		else setFoundItems(items());
	};
	useEffect(() => {
		if (searchText) {
			searchItems(searchText);
			setCurrentCategory(null);
		} else setFoundItems([]);
	}, [searchText]);

	return (
		<div className={`block-container ${style.container}`}>
			<h2>Calculate moving costs</h2>
			<div>
				<div className={style.addItems}>
					<h3>Add items to the Inventory</h3>
					<div className={style.search}>
						<div className={style.input}>
							<input
								type="text"
								name="search"
								placeholder=" "
								onChange={(e) => setSearchText(e.currentTarget.value)}
							/>
							<label htmlFor="search">Enter an item name</label>
						</div>
						<Image src={SearchIcon} alt="search-icon" />
					</div>
					<div className={style.categories}>
						<div
							className={`${style.input} ${isDropdownOpened && style.opened}`}
							onClick={() =>
								setIsDropdownOpened(isDropdownOpened ? false : true)
							}
						>
							<p>
								{currentCategory ? currentCategory : "Select an item category"}
							</p>
							<Image src={DropdownIcon} alt="dropdown-icon" />
						</div>
						<div
							className={`${style.dropdown} ${
								isDropdownOpened && style.opened
							}`}
						>
							{warehouseItemsInventory.map((item, index) => (
								<div
									onClick={() => {
										setCurrentCategory(item.category);
										setIsDropdownOpened(false);
									}}
								>
									<p>{item.category}</p>
								</div>
							))}
						</div>
					</div>
					<div
						className={`${style.items} ${
							(currentCategory || searchText) && style.active
						}`}
					>
						{searchText
							? foundItems.map((foundItem) => (
									<div
										className={style.item}
										onClick={() =>
											calculatorStore.increaseItemInInventory(foundItem)
										}
									>
										<Image src={AddIcon} alt="add-icon" />
										<p>{foundItem.itemName}</p>
									</div>
							  ))
							: warehouseItemsInventory
									.find((item) => item.category == currentCategory)
									?.items.map((item, index) => (
										<div
											className={style.item}
											onClick={() =>
												calculatorStore.increaseItemInInventory(item)
											}
										>
											<Image src={AddIcon} alt="add-icon" />
											<p>{item.itemName}</p>
										</div>
									))}
					</div>
				</div>
				<div className={style.inventory}>
					<h3>Inventory</h3>
					<div className={style.table}>
						<div className={`${style.topbar} ${style.row}`}>
							<label htmlFor="all">
								<span>
									<input
										type="checkbox"
										id="all"
										checked={
											selectAllChecked ||
											checkedItems.length ===
												calculatorStore.clientInventory.length
										}
										onChange={() => {
											if (selectAllChecked) {
												setCheckedItems([]);
											} else {
												setCheckedItems(
													calculatorStore.clientInventory.map(
														(item) => item.item.itemName,
													),
												);
											}
											setSelectAllChecked(!selectAllChecked);
										}}
									/>
								</span>
							</label>

							<p>Name</p>
							<p>Quantity</p>
						</div>

						<div className={`${style.topbar} ${style.rowMobile}`}>
							<label htmlFor="all">
								<span>
									<input
										type="checkbox"
										id="all"
										checked={
											selectAllChecked ||
											checkedItems.length ===
												calculatorStore.clientInventory.length
										}
										onChange={() => {
											if (selectAllChecked) {
												setCheckedItems([]);
											} else {
												setCheckedItems(
													calculatorStore.clientInventory.map(
														(item) => item.item.itemName,
													),
												);
											}
											setSelectAllChecked(!selectAllChecked);
										}}
									/>
								</span>
							</label>

							<p>Name</p>
						</div>
						<div className={style.rows}>
							{calculatorStore.clientInventory.map((item, index) => (
								<>
									<div className={style.row}>
										<label htmlFor={`item_${item.item.itemName}_${index}`}>
											<span>
												<input
													type="checkbox"
													id={`item_${item.item.itemName}_${index}`}
													checked={checkedItems.includes(item.item.itemName)}
													onChange={(e) => {
														if (e.currentTarget.checked) {
															setCheckedItems([
																...checkedItems,
																item.item.itemName,
															]);
														} else {
															setCheckedItems(
																checkedItems.filter(
																	(itemName) => itemName !== item.item.itemName,
																),
															);
														}
														setSelectAllChecked(false);
													}}
												/>
											</span>
										</label>
										<label htmlFor={`item_${item.item.itemName}_${index}`}>
											<p>{item.item.itemName}</p>
										</label>
										<div className={style.quantity}>
											<div
												className={style.counterController}
												onClick={() =>
													calculatorStore.decreaseItemInInventory(item.item)
												}
											>
												<Image src={MinusIcon} alt="remove-item-icon" />
											</div>
											<p>{item.quantity}</p>
											<div
												className={style.counterController}
												onClick={() =>
													calculatorStore.increaseItemInInventory(item.item)
												}
											>
												<Image src={PlusIcon} alt="add-item-icon" />
											</div>
										</div>
									</div>

									<div className={style.rowMobile}>
										<label
											htmlFor={`item_${item.item.itemName}_${index}_mobile`}
										>
											<span>
												<input
													type="checkbox"
													id={`item_${item.item.itemName}_${index}_mobile`}
													checked={checkedItems.includes(item.item.itemName)}
													onChange={(e) => {
														if (e.currentTarget.checked) {
															setCheckedItems([
																...checkedItems,
																item.item.itemName,
															]);
														} else {
															setCheckedItems(
																checkedItems.filter(
																	(itemName) => itemName !== item.item.itemName,
																),
															);
														}
														setSelectAllChecked(false);
													}}
												/>
											</span>
										</label>
										<div className={style.itemDataMobile}>
											<label
												htmlFor={`item_${item.item.itemName}_${index}_mobile`}
											>
												<p>{item.item.itemName}</p>
											</label>
											<div className={style.quantity}>
												<div
													className={style.counterController}
													onClick={() =>
														calculatorStore.decreaseItemInInventory(item.item)
													}
												>
													<Image src={MinusIcon} alt="remove-item-icon" />
												</div>
												<p>{item.quantity}</p>
												<div
													className={style.counterController}
													onClick={() =>
														calculatorStore.increaseItemInInventory(item.item)
													}
												>
													<Image src={PlusIcon} alt="add-icon-item" />
												</div>
											</div>
										</div>
									</div>
								</>
							))}
						</div>
						<div className={`${style.bottombar} ${style.row}`}>
							<p>
								<span>Total cubic feet:</span>{" "}
								{calculatorStore.currentCubicFeet}
							</p>
							<p>
								<span>Total items:</span>{" "}
								{calculatorStore.clientInventory.length}
							</p>
							<Image
								src={TrashIcon}
								alt="bucket-icon"
								onClick={() => {
									calculatorStore.clientInventory =
										calculatorStore.clientInventory.filter(
											(inventoryItem) =>
												!checkedItems.includes(inventoryItem.item.itemName),
										);
									setCheckedItems([]);
									setSelectAllChecked(false);
								}}
							/>
						</div>
						<div className={`${style.bottombarMobile} ${style.rowMobile}`}>
							<div>
								<p>
									<span>Total cubic feet:</span>{" "}
									{calculatorStore.currentCubicFeet}
								</p>
								<p>
									<span>Total items:</span>{" "}
									{calculatorStore.clientInventory.length}
								</p>
							</div>
							<Image
								src={TrashIcon}
								alt="bucket-icon"
								onClick={() => {
									calculatorStore.clientInventory =
										calculatorStore.clientInventory.filter(
											(inventoryItem) =>
												!checkedItems.includes(inventoryItem.item.itemName),
										);
									setCheckedItems([]);
									setSelectAllChecked(false);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(BasicСalculations);
