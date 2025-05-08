import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import AddIcon from "@/../public/images/calculator/add-icon.svg";
import searchIcon from "@/../public/images/calculator/search-icon_second.svg";
import SliderPagination from "@/components/calculator/sliderPagination";
import calculatorStore, {
	IInventoryItem,
	IWarehouseItem,
	IWarehouseItems,
} from "@/store/calculatorStore";

import arrow from "../../../../../public/images/calculator/calculator_search_arrow.svg";
import minus from "../../../../../public/images/calculator/minus.svg";
import plus from "../../../../../public/images/calculator/plus.svg";
import { Navigation } from "../../Navigation/Navigation";
import { ICONS } from "../Categories/Categories";
import styles from "./GoodsAmout.module.scss";

interface GoodsElement {
	item: IWarehouseItem;
	withoutBorder?: boolean;
}

interface GoodsElementList {
	category: IWarehouseItems;
}

const GoodsElement = observer(({ item, withoutBorder }: GoodsElement) => {
	const {
		clientInventory,
		increaseItemInInventory,
		getItemAmount,
		decreaseItemInInventory,
	} = calculatorStore;
	const isVisible = () => {
		return clientInventory.some(
			(el: IInventoryItem) => el.item.itemName === item.itemName,
		);
	};
	const handleClickIncrease = () => increaseItemInInventory(item);
	const handleClickDecrease = () => decreaseItemInInventory(item);

	return (
		<div
			onClick={isVisible() ? () => {} : handleClickIncrease}
			className={clsx(
				styles.element_wrapper,
				isVisible() ? styles.active : "",
				withoutBorder ? styles.no_border : "",
			)}
		>
			<div
				className={clsx(styles.element_counter, isVisible() ? "" : styles.hide)}
			>
				<Image
					src={minus}
					alt="minus-icon"
					width={25}
					height={25}
					onClick={handleClickDecrease}
					className={styles.minus_icon}
				/>
				<p>{getItemAmount(item)}</p>
				<Image
					src={plus}
					alt="plus-icon"
					width={25}
					height={25}
					onClick={handleClickIncrease}
				/>
			</div>
			<Image
				className={clsx(styles.element_image, isVisible() ? styles.hide : "")}
				src={AddIcon}
				alt="add-image"
			/>
			<p className={isVisible() ? styles.item_name : ""}>{item.itemName}</p>
		</div>
	);
});

const GoodsElementList = observer(({ category }: GoodsElementList) => {
	const { itemsInCategory } = calculatorStore;
	return (
		<div className={styles.goods_list}>
			<div className={styles.goods_list_wrapper}>
				<Image
					className={styles.goods_list_icon}
					src={ICONS[category.category as keyof typeof ICONS]}
					height={48}
					width={48}
					alt="icon"
				/>

				<p className={styles.goods_list_title}>
					{category.category}
					{itemsInCategory(category) > 0
						? `(${itemsInCategory(category)})`
						: ""}
				</p>
			</div>
			<div className={styles.goods_list_content}>
				{category.items &&
					category.items.map((item, i) => <GoodsElement key={i} item={item} />)}
			</div>
		</div>
	);
});

const Search = observer(() => {
	const [search, setSearch] = useState<string | null>(null);
	const { getChosenCategories } = calculatorStore;
	const [foundItems, setFoundItems] = useState<IWarehouseItem[]>([]);

	const findItems = (text: string) => {
		let foundItems: IWarehouseItem[] = [];
		getChosenCategories().map((warehouseItem) => {
			warehouseItem.items.map((item) => {
				if (item.itemName.toLowerCase().includes(text.toLowerCase()))
					foundItems.push(item);
			});
		});
		return foundItems;
	};

	useEffect(() => {
		if (search) {
			setFoundItems(findItems(search));
		} else {
			setFoundItems([]);
		}
	}, [search]);

	return (
		<form action="">
			<label htmlFor="search">
				Select the <span style={{ color: "#436AE5" }}>items</span> you want to
				move
			</label>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					maxWidth: "490px",
					maxHeight: "55px",
					height: "100%",
					width: "100%",
				}}
			>
				<input
					type="text"
					id="search"
					placeholder="search"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className={styles.search_icon}>
					<Image src={searchIcon} alt="search-icon" width={20} height={20} />
				</div>
			</div>
			<div
				className={clsx(
					styles.finded_items,
					search?.length === 0 || search === null ? styles.hide : "",
				)}
			>
				{foundItems.length ? (
					foundItems.map((item, i) => (
						<GoodsElement key={i} item={item} withoutBorder />
					))
				) : (
					<p style={{ textAlign: "center" }}>No items found</p>
				)}
			</div>
		</form>
	);
});

const GoodsAmout = () => {
	const { getChosenCategories, getTotalItems } = calculatorStore;

	return (
		<section className={styles.goods}>
			<SliderPagination sliderLenght={4} activeSlide={3} />
			<div className={styles.goods_wrapper}>
				<div className={styles.goods_header}>
					<div className={styles.goods_header_title}>
						<h1 className={styles.pageTitle}>{"Calculate \n moving costs"}</h1>
					</div>
					<div className={styles.goods_header_search}>
						<Search />
					</div>
				</div>
				<div className={styles.goods_body}>
					{getChosenCategories() &&
						getChosenCategories().map((category, i) => (
							<GoodsElementList key={i} category={category} />
						))}
				</div>
			</div>
			<Navigation
				nextBtn={{
					link: "/inventory",
					text:
						getTotalItems() > 0
							? `Selected ${getTotalItems()} items`
							: "Select items",
					isDisabled: calculatorStore.clientInventory.length === 0,
				}}
				prevBtn={{
					link: "/chose-categories",
					text: "Back",
					shrinckOnMobile: true,
				}}
				isHovertinContent
			/>
		</section>
	);
};

export default observer(GoodsAmout);
