import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import slugify from "slugify";

import { IStrapiImage } from "@/lib/notion";
import styles from "@/styles/css/guides/navigationalMenu.module.css";

// assets
import ButtonArrow from "../../../public/images/mainPage/button-arrow-blue.svg";
import SearchBar from "../blog/searchBar";

export const slugToName = (slug: string) => {
	let name = slug.split("-").join(" ");

	name.split(" ").forEach((word) => {
		name = name.replace(word, word[0].toUpperCase() + word.slice(1));
	});

	return name;
};

interface IStateNavigation {
	id: number;
	attributes: {
		stateName: string;
		stateFlag: IStrapiImage;
	};
}

const NavigationalMenu: FC<{ 
	store: IStateNavigation[]; 
	isMain?: boolean;
	basePath?: string;
}> = ({
	store,
	isMain,
	basePath = '/locations'
}) => {
	store = store.sort((a, b) =>
		a.attributes.stateName.localeCompare(b.attributes.stateName),
	);
	const [search, setSearch] = useState<string>("");
	const [activeStates, setActiveStates] = useState(store);
	const [statesPerView, setStatesPerView] = useState<number>(10);
	const [isAllStatesPerView, setIsAllStatesPerView] = useState<boolean>(false);

	const increaseStatesPerView = () => {
		setStatesPerView((prev) => prev + 10);
	};

	useEffect(() => {
		setIsAllStatesPerView(activeStates.length > statesPerView ? true : false);
	}, [statesPerView, search]);

	useEffect(() => {
		setActiveStates(
			store.filter((state) =>
				state.attributes.stateName.toLowerCase().includes(search.toLowerCase()),
			),
		);

		if (search == "") {
			setActiveStates(store);
		}

		setStatesPerView(10);
	}, [search]);

	return (
		<section>
			<div
				className={`block-container ${styles.container} ${isMain ? styles.isMain : ""}`}
			>
				<span className={styles.preTitle}>relocation states</span>
				<h2>Choose your state for relocation</h2>

				<SearchBar
					title={"Search States"}
					setSearch={setSearch}
					search={search}
				/>

				<div className={styles.menu}>
					{activeStates.map((state, index) => (
						<Link
							key={index}
							href={`${basePath}/${slugify(
								state.attributes.stateName,
							).toLowerCase()}`}
							className={`${index < statesPerView && styles.active}`}
						>
							<div className={styles.item}>
								<div className={styles.imageContainer}>
									<img
										src={state.attributes.stateFlag.data.attributes.url}
										alt={`${state.attributes.stateName} flag image`}
									/>
								</div>
								<p>{state.attributes.stateName}</p>
							</div>
						</Link>
					))}
					<div
						className={`${styles.mobileMore} ${
							isAllStatesPerView && styles.active
						}`}
						onClick={() => increaseStatesPerView()}
					>
						<p>See more</p> <Image src={ButtonArrow} alt="right arrow icon" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavigationalMenu;
