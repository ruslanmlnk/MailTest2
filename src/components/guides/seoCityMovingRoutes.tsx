import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

import DistanceIcon from "@/../public/images/distance-icon.svg";
import PointAIcon from "@/../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointBIcon from "@/../public/images/mainPage/serviceMap/pointB-icon.svg";
import Route from "@/../public/images/route.svg";
import Arrow from "@/../public/images/small-black-arrow.svg";
import styles from "@/styles/scss/guides/seoCityMovingRoutes.module.scss";

export interface ISEOCityMovingRoutes {
	attributes: {
		movingFrom: string;
		movingTo: string;
		distance: number;
		stateName: string;
	};
}

interface SeoCityMovingRoutesProps {
	store: ISEOCityMovingRoutes[];
	stateName: string;
	isCityPage?: boolean;
	cityName?: string;
	basePath?: string;
}

const Card = ({
	item,
	stateName,
	isCityPage,
	basePath = "/locations",
}: {
	item: ISEOCityMovingRoutes;
	stateName: string;
	isCityPage: boolean;
	basePath?: string;
}) => {
	return (
		<Link
			href={`${basePath}/${slugify(stateName).toLocaleLowerCase()}/${slugify(
				item.attributes.movingFrom,
			).toLocaleLowerCase()}-to-${slugify(
				item.attributes.movingTo,
			).toLocaleLowerCase()}-move`}
		>
			<div className={styles.card}>
				<div className={styles.route}>
					<Link
						className={styles.active_mobile}
						href={`${basePath}/${slugify(stateName).toLocaleLowerCase()}/${slugify(
							item.attributes.movingFrom,
						).toLocaleLowerCase()}-to-${slugify(
							item.attributes.movingTo,
						).toLocaleLowerCase()}-move`}
					>
						{item.attributes.movingFrom} {isCityPage ? "to" : "—"}{" "}
						{item.attributes.movingTo}
					</Link>
				</div>
				<div className={styles.distance}>
					<Image src={DistanceIcon} alt="distance icon" />
					<p>{item.attributes.distance} miles</p>
				</div>
				<Link
					className={styles.active_desktop}
					href={`${basePath}/${slugify(stateName).toLocaleLowerCase()}/${slugify(
						item.attributes.movingFrom,
					).toLocaleLowerCase()}-to-${slugify(
						item.attributes.movingTo,
					).toLocaleLowerCase()}-move`}
				>
					Read more <Image src={Arrow} alt="arrow right icon" />
				</Link>
			</div>
		</Link>
	);
};

const SeoCityMovingRoutes: React.FC<SeoCityMovingRoutesProps> = ({ 
	store, 
	stateName, 
	isCityPage = false, 
	cityName,
	basePath = "/locations"
}) => {
	const [originSearch, setOriginSearch] = React.useState("");
	const [destinationSearch, setDestinationSearch] = React.useState("");
	const [mobileAmount, setMobileAmount] = React.useState(3);
	const [activeRoutes, setActiveRoutes] = React.useState(store);

	const handleOriginSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOriginSearch(e.target.value);
	};

	const handleDestinationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDestinationSearch(e.target.value);
	};

	React.useEffect(() => {
		const newStore = store.filter((item) => {
			return (
				item.attributes.movingFrom
					.toLowerCase()
					.includes(originSearch.toLowerCase()) &&
				item.attributes.movingTo
					.toLowerCase()
					.includes(destinationSearch.toLowerCase())
			);
		});

		setActiveRoutes(newStore);
	}, [originSearch, destinationSearch]);

	return (
		<section>
			<div className={`block-container ${styles.container}`}>
				<div className={styles.header}>
					<div className={styles.title}>
						<span className={styles.preTitle}>Popular routes</span>
						{cityName ? (
							<h2>
								<span>Popular routes</span> from{" "}
								{cityName.replace("movers", "").replace("Movers", "")}
							</h2>
						) : (
							<h2>
								<span>Popular routes</span>around the state
							</h2>
						)}
					</div>
					<div className={styles.search}>
						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								type="text"
								placeholder="From where?"
								onChange={handleOriginSearch}
							/>
							<Image src={PointAIcon} alt="point a icon" />
						</div>
						<Image src={Route} alt="route icon" />
						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								type="text"
								placeholder="Where to?"
								onChange={handleDestinationSearch}
							/>
							<Image src={PointBIcon} alt="point b icon" />
						</div>
					</div>
					<div className={styles.searchMobile}>
						<div>
							<div className={styles.inputWrapper}>
								<input
									className={styles.input}
									type="text"
									placeholder="From where?"
									onChange={handleOriginSearch}
								/>
								<Image src={PointAIcon} alt="point a icon" />
							</div>
							<div className={styles.inputWrapper}>
								<input
									className={styles.input}
									type="text"
									placeholder="Where to?"
									onChange={handleDestinationSearch}
								/>
								<Image src={PointBIcon} alt="point b icon" />
							</div>
						</div>
						<Image src={Route} alt="route icon" />
					</div>
				</div>

				<div className={styles.desktop}>
					<div className={styles.grid}>
						{activeRoutes.map((item, i) => (
							<Card
								item={item}
								key={i}
								stateName={stateName}
								isCityPage={isCityPage}
								basePath={basePath}
							/>
						))}
					</div>
					<div className={`${styles.grid} ${styles.more}`}>
						{activeRoutes.slice(6, store.length).map((item, i) => (
							<Card
								item={item}
								key={i}
								stateName={stateName}
								isCityPage={isCityPage}
								basePath={basePath}
							/>
						))}
					</div>
				</div>

				<div className={styles.mobile}>
					<div className={styles.grid}>
						{activeRoutes.slice(0, mobileAmount).map((item, i) => (
							<Card
								item={item}
								key={i}
								stateName={stateName}
								isCityPage={isCityPage}
								basePath={basePath}
							/>
						))}
					</div>
					<div className={`${styles.grid} ${styles.more}`}>
						{activeRoutes.slice(3, store.length).map((item, i) => (
							<Card
								item={item}
								key={i}
								stateName={stateName}
								isCityPage={isCityPage}
								basePath={basePath}
							/>
						))}
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						{activeRoutes.length >= mobileAmount && (
							<button
								className="add blue"
								onClick={() => setMobileAmount(mobileAmount + 3)}
							>
								See more
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SeoCityMovingRoutes;
