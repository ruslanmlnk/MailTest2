import { geoCentroid } from "d3-geo";
import Link from "next/link";
import { useState } from "react";
import {
	Annotation,
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from "react-simple-maps";

import allStates from "@/store/guides/allStates.json";
import styles from "@/styles/css/guides/mapOfTheStates.module.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const offsets: any = {
	VT: [50, -8],
	NH: [34, 2],
	MA: [30, -1],
	RI: [28, 2],
	CT: [35, 10],
	NJ: [34, 1],
	DE: [33, 0],
	MD: [47, 10],
	HI: [30, -20],
	FL: [60, -30],
};

const MapOfTheStates = ({ isMain }: { isMain?: boolean }) => {
	const hexToRgb = (hex: any) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? [
					parseInt(result[1], 16),
					parseInt(result[2], 16),
					parseInt(result[3], 16),
				]
			: null;
	};

	const statesWithColors = allStates.map((state) => ({
		fill: hexToRgb("#436AE5"),
		...state,
	}));

	const [activeGeo, setActiveGeo] = useState("");

	return (
		<div
			className={`block-container ${styles.container} ${isMain ? styles.isMain : ""}`}
		>
			<span className={styles.preTitle}>Nationwide Moving Services</span>
			<h2>Star Van Lines Movers Near Me</h2>
			<ComposableMap projection="geoAlbersUsa">
				<Geographies geography={geoUrl}>
					{({ geographies }) => (
						<>
							{geographies.map((geo) => {
								return (
									<Link
										href={`/locations/${
											allStates.find((s) => s.val === geo.id)?.slug
										}`}
									>
										<Geography
											key={geo.rsmKey}
											stroke="#FFF"
											geography={geo}
											onMouseEnter={() => {
												setActiveGeo(geo.id);
											}}
											onMouseLeave={() => {
												setActiveGeo("");
											}}
											fill={geo.id === activeGeo ? "#F58D1D" : "#436AE5"}
										/>
									</Link>
								);
							})}
							{geographies.map((geo) => {
								const centroid = geoCentroid(geo);
								const cur = statesWithColors.find((s) => s.val === geo.id)!;
								return (
									<g key={geo.rsmKey + "-name"}>
										{cur &&
											centroid[0] > -160 &&
											centroid[0] < -67 &&
											(Object.keys(offsets).indexOf(cur.id) === -1 ? (
												<Link
													href={`/locations/${
														allStates.find((s) => s.val === geo.id)?.slug
													}`}
												>
													<Marker coordinates={centroid}>
														<text
															y="2"
															fontSize={14}
															textAnchor="middle"
															onMouseEnter={() => setActiveGeo(geo.id)}
															onMouseLeave={() => setActiveGeo("")}
															style={{ cursor: "pointer" }}
															fill={"#FFFFFF"}
														>
															{cur.id}
														</text>
													</Marker>
												</Link>
											) : (
												<Link
													href={`/locations/${
														allStates.find((s) => s.val === geo.id)?.slug
													}`}
												>
													<Annotation
														subject={centroid}
														connectorProps={{}}
														dx={offsets[cur.id][0]}
														dy={offsets[cur.id][1]}
													>
														<text
															x={4}
															fontSize={14}
															alignmentBaseline="middle"
															onMouseEnter={() => setActiveGeo(geo.id)}
															onMouseLeave={() => setActiveGeo("")}
															style={{ cursor: "pointer" }}
														>
															{cur.id}
														</text>
													</Annotation>
												</Link>
											))}
									</g>
								);
							})}
						</>
					)}
				</Geographies>
			</ComposableMap>
		</div>
	);
};

export default MapOfTheStates;
