import { autorun, makeAutoObservable } from "mobx";

import { Client } from "@notionhq/client";
import { Item } from "@radix-ui/react-select";

import formsStore from "./formsStore";
import mapStore from "./mapStore";

interface IExtras {
	packaging: boolean;
	storage: boolean;
}

export interface IWarehouseItem {
	id: number;
	itemName: string;
	cubicFeet: number;
}

export interface IWarehouseItems {
	id: number;
	category: string;
	items: IWarehouseItem[];
}

export interface IInventoryItem {
	item: IWarehouseItem;
	quantity: number;
	cubicFeet: number;
}

export interface ITotalItemsInChosenCategories {
	categoryTitle: string;
	amount: number;
}

class CalculatorStore {
	currentSlide: number;
	cost: number;
	minCubicFeet: number;
	currentCubicFeet: number;
	extras: IExtras;
	clientInventory: IInventoryItem[];
	checkedItems: string[] = [];
	isNextSlideAllowed: boolean;
	chosenCategories: IWarehouseItems[];
	totalItemsInChosenCategories: ITotalItemsInChosenCategories[];

	constructor() {
		this.currentSlide = 0;
		this.cost = 0;
		this.minCubicFeet = 286;
		this.currentCubicFeet = 0;
		this.extras = {
			packaging: false,
			storage: false,
		};
		this.clientInventory = [];
		this.isNextSlideAllowed = true;
		this.chosenCategories = [];
		this.totalItemsInChosenCategories = [];

		makeAutoObservable(this);
	}

	increaseItemInInventory = (item: IWarehouseItem) => {
		if (this.clientInventory.find((i) => i.item.itemName == item.itemName)) {
			this.clientInventory.forEach((inventoryItem) => {
				if (inventoryItem.item.itemName == item.itemName) {
					inventoryItem.quantity++;
				} else {
					return;
				}
			});
		} else {
			this.clientInventory.push({
				item: item,
				quantity: 1,
				cubicFeet: item.cubicFeet,
			});
		}
	};

	deleteItemFromInventory = (item: IWarehouseItem) => {
		this.clientInventory = this.clientInventory.filter(
			(inventoryItem) => inventoryItem.item != item,
		);
	};

	decreaseItemInInventory = (item: IWarehouseItem) => {
		let isDeleted = false;
		this.clientInventory.forEach((inventoryItem) => {
			if (inventoryItem.item.itemName == item.itemName) {
				if (inventoryItem.quantity == 1) {
					this.deleteItemFromInventory(item);
					isDeleted = true;
				} else {
					inventoryItem.quantity--;
				}
			}
		});
		return isDeleted;
	};

	removeElementFromInventory = (item: IWarehouseItem) => {
		this.clientInventory.forEach((inventoryItem) => {
			if (inventoryItem.item.itemName == item.itemName) {
				this.deleteItemFromInventory(item);
			}
		});
	};

	setClientInventory = (inventory: IInventoryItem[]) => {
		this.clientInventory = [...inventory];
	};

	isInClientInventory = (itemTitle: string) => {
		let is = false;
		this.clientInventory.forEach((item) => {
			if (item.item.itemName === itemTitle) is = true;
		});
		return is;
	};

	pushItemToInventory = (item: IInventoryItem, index: number) => {
		this.clientInventory = [
			...this.clientInventory.slice(0, index),
			item,
			...this.clientInventory.slice(index),
		];
		return this.clientInventory;
	};

	setChosenCategories = (category: IWarehouseItems) => {
		this.chosenCategories.push(category);
	};
	removeChosenCategories = (category: IWarehouseItems) => {
		this.chosenCategories = this.chosenCategories.filter(
			(el) => el.category !== category.category,
		);
		this.clientInventory = this.clientInventory.filter(
			(Item) =>
				!category.items.some((el) => el.itemName !== Item.item.itemName),
		);
	};
	getChosenCategories = () => {
		return this.chosenCategories;
	};

	clearSomeItems = (localItems: IInventoryItem[]) => {
		this.clientInventory = this.clientInventory.filter(
			(el) => !localItems.some((el_) => el.item.itemName == el_.item.itemName),
		);
	};

	getItemAmount = (item: IWarehouseItem) =>
		this.clientInventory.find((el) => el.item === item)?.quantity;

	geTotalCubicFeet = () => {
		if (this.clientInventory.length !== 0) {
			return this.clientInventory.reduce(function (
				sum,
				{ quantity, cubicFeet },
			) {
				return sum + quantity * cubicFeet;
			}, 0);
		}
		return 0;
	};
	getTotalItems = () => {
		if (this.clientInventory.length !== 0) {
			return this.clientInventory.reduce(function (sum, { quantity }) {
				return sum + quantity;
			}, 0);
		}
		return 0;
	};

	itemsInCategory = (category: IWarehouseItems) => {
		let counter = 0;
		category.items.forEach((el) => {
			this.clientInventory.forEach((el2) => {
				if (el.itemName === el2.item.itemName) {
					++counter;
				}
			});
		});
		return counter;
	};
	calculateCost = () => {
		let cost: number;
		const currentCubicFeet = this.currentCubicFeet;
		const minCubicFeet = this.minCubicFeet;
		let distance = 0;

		if (Math.round(mapStore.distance) !== Math.round(4522.9395))
			distance = mapStore.distance;

		if (currentCubicFeet > minCubicFeet) {
			cost = currentCubicFeet * 4 + distance * 0.001 * currentCubicFeet;
		} else {
			cost = minCubicFeet * 4 + distance * 0.001 * minCubicFeet;
		}

		if (
			Math.round(mapStore.distance) === Math.round(4522.9395) &&
			minCubicFeet > currentCubicFeet
		) {
			cost = 400 + Number(this.extras.packaging) * minCubicFeet;
		}

		this.cost = cost;
	};
	clearInventory = () => {
		this.clientInventory = [];
	};
}

const calculatorStore = new CalculatorStore();

setTimeout(() => {
	autorun(() => {
		const calculatorStoreJSON = JSON.stringify(calculatorStore);
		const formsStoreJSON = JSON.stringify(formsStore);

		calculatorStore.calculateCost();
	});

	autorun(() => {
		const calculatorStoreJSON = JSON.stringify(calculatorStore);

		let totalCubicFeet = (): number => {
			let result: number = 0;

			calculatorStore.clientInventory.map((inventoryItem) => {
				result += inventoryItem.cubicFeet * inventoryItem.quantity;
			});

			return result;
		};

		calculatorStore.currentCubicFeet = totalCubicFeet();
	});

	autorun(() => {
		const calculatorStoreJSON = JSON.stringify(calculatorStore);
		const formsStoreJSON = JSON.stringify(formsStore);

		// switch (calculatorStore.currentSlide) {
		// 	case 0:
		// 		calculatorStore.isNextSlideAllowed = !!formsStore.CalculatorData.phone1;
		// 		break;

		// 	case 1:
		// 		if (
		// 			mapStore.postcodes &&
		// 			mapStore.postcodes[0] &&
		// 			mapStore.postcodes[1] &&
		// 			formsStore.CalculatorData.movedate
		// 		) {
		// 			calculatorStore.isNextSlideAllowed = true;
		// 		} else {
		// 			calculatorStore.isNextSlideAllowed = false;
		// 		}
		// 		break;

		// 	case 2:
		// 		calculatorStore.isNextSlideAllowed =
		// 			calculatorStore.clientInventory.length > 0;
		// 		break;

		// 	case 3:
		// 		calculatorStore.isNextSlideAllowed = true;
		// 		break;
		// }

		calculatorStore.calculateCost();
	});
});

export default calculatorStore;
