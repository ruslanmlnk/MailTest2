import Link from "next/link";
import React, { FC, useState } from "react";
import slugify from "slugify";
import "swiper/css";

import style from "@/styles/css/guides/seoMovingRoutes.module.css";

// interfaces
interface ISeoMovingRoutes {
	stateName: string;
	routes: any;
	basePath?: string;
}

const SeoMovingRoute: FC<ISeoMovingRoutes> = ({ stateName, routes, basePath = "/locations" }) => {
	const movingTo = (item: any) => {
		return item.attributes.movingTo.data.attributes.stateName
			? item.attributes.movingTo.data.attributes.stateName
			: item.attributes.movingTo.data.attributes.cityName;
	};
	console.log("routes.attributes", routes.data);
	routes.data = routes.data.sort((a: any, b: any) =>
		a.attributes.movingTo.data.attributes.stateName.localeCompare(
			b.attributes.movingTo.data.attributes.stateName,
		),
	);

	const [mobileAmount, setMobileAmount] = useState(4);

	const handleSeeAllClick = () => {
		if (mobileAmount === 4) {
			setMobileAmount(routes.data.length);
		} else {
			setMobileAmount(4);
		}
	};

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<span className={style.preTitle}>Routes</span>
				<h2>
					<span>Moving routes</span> from {stateName}
				</h2>
				<div className={style.grid}>
					{routes.data.map((item: any, index: any) => (
						<div key={index}>
							<p>
								<Link
									href={`${basePath}/${slugify(
										stateName,
									).toLowerCase()}/${slugify(
										stateName,
									).toLocaleLowerCase()}-to-${slugify(
										movingTo(item),
									).toLocaleLowerCase()}`}
								>
									{movingTo(item)}
								</Link>
							</p>
						</div>
					))}
				</div>
				<div className={style.gridMobile}>
					{routes.data.slice(0, mobileAmount).map((item: any, index: any) => (
						<div key={index}>
							<p>
								<Link
									href={`${basePath}/${slugify(
										stateName,
									).toLowerCase()}/${slugify(
										stateName,
									).toLocaleLowerCase()}-to-${slugify(
										movingTo(item),
									).toLocaleLowerCase()}`}
								>
									{movingTo(item)}
								</Link>
							</p>
						</div>
					))}
				</div>
				<button
					className={`add blue ${style.seeAllButton}`}
					onClick={handleSeeAllClick}
				>
					{mobileAmount === 4 ? "See all" : "See less"}
				</button>
			</div>
		</section>
	);
};

export default SeoMovingRoute;
