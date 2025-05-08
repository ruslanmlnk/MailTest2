import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import slugify from "slugify";

import DropdownIcon from "@/../public/images/calculator/dropdown-icon.svg";
import { IStrapiImage } from "@/lib/notion";
import * as Select from "@radix-ui/react-select";

import style from "../../styles/css/guides/seoNavigation.module.css";
import SearchBar from "./seoSearchBar";

export interface ICities {
	data: {
		id: number;
		attributes: {
			cityName: string;
			slug: string;
			image: IStrapiImage;
		};
	}[];
}

interface SeoNavigationProps {
	cities: ICities;
	stateName: string;
	basePath?: string;
}

const SeoNavigation: FC<SeoNavigationProps> = ({ cities, stateName, basePath = "/locations" }) => {
	const [search, setSearch] = useState("");
	const [activeCities, setActiveCities] = useState(cities);
	const [sortingOrder, setSortingOrder] = useState("straight");

	useEffect(() => {
		if (search === "") {
			setActiveCities(cities);
			return;
		} else {
			const newCities = cities.data.filter((item) =>
				item.attributes.cityName.toLowerCase().includes(search.toLowerCase()),
			);
			setActiveCities({ data: newCities });
		}
	}, [search, sortingOrder]);

	useEffect(() => {
		if (sortingOrder === "reverse") {
			const newCities = cities.data.sort((a, b) =>
				b.attributes.cityName.localeCompare(a.attributes.cityName),
			);
			setActiveCities({ data: newCities });
		} else {
			const newCities = cities.data.sort((a, b) =>
				a.attributes.cityName.localeCompare(b.attributes.cityName),
			);
			setActiveCities({ data: newCities });
		}
	}, [sortingOrder]);

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				{cities.data[0] && (
					<div className={style.menu}>
						<div className={style.title}>
							<span>Big cities</span>

							<Select.Root onValueChange={setSortingOrder}>
								<Select.Trigger className={style.selectTrigger}>
									<Select.Value placeholder="Sorting A-Z" />
									<Select.Icon className={style.selectIcon}>
										<Image
											src={DropdownIcon}
											alt="dropdown chevron down icon"
										/>
									</Select.Icon>
								</Select.Trigger>
								<Select.Portal>
									<Select.Content
										sideOffset={500}
										className={style.selectContent}
									>
										<Select.Viewport className={style.selectViewport}>
											<SelectItem value="straight">Sorting A-Z</SelectItem>
											<SelectItem value="reverse">Sorting Z-A</SelectItem>
										</Select.Viewport>
									</Select.Content>
								</Select.Portal>
							</Select.Root>
						</div>
						<SearchBar
							search={search}
							setSearch={setSearch}
							title=""
							className={style.search}
						/>
						<div className={style.grid}>
							{activeCities.data.map((item, index) => (
								<Link
									href={`${basePath}/${slugify(stateName, {
										lower: true,
									})}/${slugify(item.attributes.cityName, { lower: true })}`}
									key={index}
								>
									<Image
										src={item.attributes.image.data.attributes.url}
										width={100}
										height={100}
										alt={
											item.attributes.image.data.attributes.alternativeText ||
											`${item.attributes.cityName} image SVL`
										}
									/>
									<p>{item.attributes.cityName}</p>
								</Link>
							))}
							<div className={style.hiddenCities}>
								{cities.data.map((item, index) => (
									<Link
										href={`${basePath}/${slugify(stateName, {
											lower: true,
										})}/${slugify(item.attributes.cityName, {
											lower: true,
										})}`}
										key={index}
									>
										<Image
											src={item.attributes.image.data.attributes.url}
											width={100}
											height={100}
											alt={
												item.attributes.image.data.attributes.alternativeText ||
												`${item.attributes.cityName} image SVL`
											}
										/>
										<p>{item.attributes.cityName}</p>
									</Link>
								))}
							</div>
						</div>

						<div className={style.mobileGrid}>
							{activeCities.data.map((item, index) => (
								<Link
									href={`${basePath}/${slugify(stateName, {
										lower: true,
									})}/${slugify(item.attributes.cityName, { lower: true })}`}
									key={index}
								>
									<Image
										src={item.attributes.image.data.attributes.url}
										width={100}
										height={100}
										alt={
											item.attributes.image.data.attributes.alternativeText ||
											`${item.attributes.cityName} image SVL`
										}
									/>
									<p>{item.attributes.cityName}</p>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

const SelectItem = ({
	children,
	value,
}: {
	children: React.ReactNode;
	value: string;
}) => {
	return (
		<Select.Item className={"selectItem"} value={value}>
			<Select.ItemText className={style.itemText}>{children}</Select.ItemText>
		</Select.Item>
	);
};

export default SeoNavigation;
