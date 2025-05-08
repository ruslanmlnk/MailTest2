import React, { FC } from "react";

import style from "../../styles/css/guides/seoStats.module.css";
import { AnimatedNumber } from "../animatedNumber";

export interface ISEOStats {
	store: {
		id: number;
		title: string;
		statCard: {
			stat: string;
			description: string;
		}[];
	};
	placeName?: string;
	isFirst?: boolean;
}

export const splitNum = (num: string) => {
	let pref, strNumber: string, number: number, post;

	strNumber = num.match(/\d+/g)![0];
	pref = num.slice(0, num.indexOf(strNumber));
	post = num.slice(num.indexOf(strNumber) + strNumber.length);
	number = parseInt(strNumber);

	return { pref, number, post };
};

const SeoStats = ({ store, placeName, isFirst }: ISEOStats) => {
	return (
		<section>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container}`}
			>
				<h4 className="pretitle">WHAT'S INTERESTING HERE</h4>
				<h2>
					{placeName
						? `Benefits of moving to the ${placeName}`
						: `Benefits of moving to the city`}
				</h2>
				<div className={style.grid}>
					{store.statCard.slice(0, 6).map((item, index) => (
						<div className={style.card} key={index}>
							<p className={style.number}>
								{item.stat.match(/\d+/g) ? (
									<>
										<b>{splitNum(item.stat).pref}</b>
										<AnimatedNumber
											duration={1500}
											value={splitNum(item.stat).number}
										/>
										{splitNum(item.stat).post}
									</>
								) : (
									<span>{item.stat}</span>
								)}
							</p>
							<p>{item.description}</p>
						</div>
					))}
				</div>
				<div className={style.gridSec}>
					{store.statCard.slice(6).map((item, index) => (
						<div className={style.card} key={index}>
							<p className={style.number}>
								{item.stat.match(/\d+/g) ? (
									<>
										<b>{splitNum(item.stat).pref}</b>
										<AnimatedNumber
											duration={1500}
											value={splitNum(item.stat).number}
										/>
										{splitNum(item.stat).post}
									</>
								) : (
									<span>{item.stat}</span>
								)}
							</p>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SeoStats;
