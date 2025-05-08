import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import SearchIcon from "@/../public/images/search-icon-sm.svg";
import styles from "@/styles/css/guides/seoZipCodes.module.css";

const SeoZipCodes: React.FC<{ store: any[]; stateName: string }> = ({
	store,
	stateName,
}) => {
	const [search, setSearch] = useState<string>("");
	const [activeZipCodes, setActiveZipCodes] = useState(store);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		setActiveZipCodes(
			store.filter((item) =>
				item.attributes.zipCode.toLowerCase().includes(search.toLowerCase()),
			),
		);
		if (search == "") setActiveZipCodes(store);
	}, [search]);

	const [zipCodesAmount, setZipCodesAmount] = useState(9);

	const increaseZipCodesAmount = () => {
		if (zipCodesAmount === 9) {
			setZipCodesAmount(activeZipCodes.length);
		} else {
			setZipCodesAmount(9);
		}
	};

	return (
		<section>
			<div className={`block-container ${styles.container}`}>
				<div className={styles.header}>
					<div>
						<h4>Zip Codes</h4>
						<h2>
							Popular Zip Codes <br /> to move to {stateName}
						</h2>
					</div>
					<div className={styles.search}>
						<label htmlFor="zipSearch">Search the zip code</label>
						<input
							type="text"
							id="zipSearch"
							placeholder="00000"
							onChange={handleSearch}
							value={search}
						/>
						<Image src={SearchIcon} alt="search icon" />
					</div>
				</div>
				<div className={styles.grid}>
					{activeZipCodes.map((item: any) => (
						<Link
							href={`/locations/${stateName.toLowerCase()}/${
								item.attributes.zipCode
							}`}
							key={item.id}
						>
							{item.attributes.zipCode}
						</Link>
					))}
				</div>

				<div className={styles.gridMobile}>
					{activeZipCodes.slice(0, zipCodesAmount).map((item: any) => (
						<Link
							href={`/locations/${stateName.toLowerCase()}/${
								item.attributes.zipCode
							}`}
							key={item.id}
						>
							{item.attributes.zipCode}
						</Link>
					))}
				</div>

				<button
					className={`add blue ${styles.seeAll}`}
					onClick={increaseZipCodesAmount}
				>
					{zipCodesAmount == 9 ? "See all" : "See less"}
				</button>
			</div>
		</section>
	);
};

export default SeoZipCodes;
