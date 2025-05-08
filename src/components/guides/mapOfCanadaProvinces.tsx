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

import canadaProvinces from "@/store/guides/canadaProvinces.json";
import styles from "@/styles/css/guides/mapOfTheStates.module.css";

const geoUrl = "https://gist.githubusercontent.com/Saw-mon-and-Natalie/a11f058fc0dcce9343b02498a46b3d44/raw/e8afc74f791169a64d6e8df033d7e88ff85ba673/canada.json";

const offsets: any = {
	"CA09": [30, -5], // Prince Edward Island
	"CA07": [20, 1], // Nova Scotia
	"CA04": [20, -10], // New Brunswick
	"CA05": [20, 1], // Newfoundland and Labrador
	"CA10": [25, 5], // Quebec
	"CA08": [20, 1], // Ontario
	"CA03": [20, 0], // Manitoba
	"CA11": [30, 5], // Saskatchewan
	"CA01": [20, -10], // Alberta
	"CA02": [30, -15], // British Columbia
	"CA06": [20, -10], // Northwest Territories
	"CA13": [30, -15], // Nunavut
	"CA12": [30, -15], // Yukon Territory
};

const provincesWithAnnotation = [
	"CA09", // Prince Edward Island
	"CA07", // Nova Scotia
	"CA04", // New Brunswick
	"CA05", // Newfoundland and Labrador
	"CA13", // Nunavut
];

const provinceCodes: { [key: string]: string } = {
	"CA01": "AB", // Alberta
	"CA02": "BC", // British Columbia
	"CA03": "MB", // Manitoba
	"CA04": "NB", // New Brunswick
	"CA05": "NL", // Newfoundland and Labrador
	"CA06": "NT", // Northwest Territories
	"CA07": "NS", // Nova Scotia
	"CA08": "ON", // Ontario
	"CA09": "PE", // Prince Edward Island
	"CA10": "QC", // Quebec
	"CA11": "SK", // Saskatchewan
	"CA12": "YT", // Yukon Territory
	"CA13": "NU"  // Nunavut
};

const MapOfCanadaProvinces = ({ isMain }: { isMain?: boolean }) => {
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

	const provincesWithColors = canadaProvinces.map((province) => ({
		fill: hexToRgb("#436AE5"),
		...province,
	}));

	const [activeGeo, setActiveGeo] = useState("");

	return (
		<div
			className={`block-container ${styles.container} ${isMain ? styles.isMain : ""}`}>
			<span className={styles.preTitle}>Canadian Moving Services</span>
			<h2>Star Van Lines Canada Movers</h2>
			<ComposableMap 
				projection="geoMercator"
				projectionConfig={{ 
					scale: 300,
					center: [-95, 72],
					rotate: [0, 0, 0]
				}}
				style={{ width: '100%', height: '100%' }}
				width={800}
				height={600}
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) => (
						<>
							{geographies.map((geo) => {
								return (
									<Link
										href={`/international/${
											canadaProvinces.find((s) => s.val === geo.properties.CODE)?.slug
										}`}
									>
										<Geography
											key={geo.rsmKey}
											stroke="#FFF"
											geography={geo}
											onMouseEnter={() => {
												setActiveGeo(geo.properties.CODE);
											}}
											onMouseLeave={() => {
												setActiveGeo("");
											}}
											fill={geo.properties.CODE === activeGeo ? "#F58D1D" : "#436AE5"}
											style={{
												default: { outline: 'none' },
												hover: { outline: 'none' },
												pressed: { outline: 'none' }
											}}
										/>
									</Link>
								);
							})}
							{geographies.map((geo) => {
								const centroid = geoCentroid(geo);
								const cur = provincesWithColors.find((s) => s.val === geo.properties.CODE)!;
								return (
									<g key={geo.rsmKey + "-name"}>
										{cur &&
											(provincesWithAnnotation.includes(cur.val) ? (
												<Link
													href={`/international/${
														canadaProvinces.find((s) => s.val === geo.properties.CODE)?.slug
													}`}
												>
													<Annotation
														subject={centroid}
														connectorProps={{}}
														dx={offsets[cur.val][0]}
														dy={offsets[cur.val][1]}
													>
														<text
															x={4}
															fontSize={14}
															alignmentBaseline="middle"
															onMouseEnter={() => setActiveGeo(geo.properties.CODE)}
															onMouseLeave={() => setActiveGeo("")}
															style={{ cursor: "pointer" }}
														>
															{provinceCodes[cur.val]}
														</text>
													</Annotation>
												</Link>
											) : (
												<Link
													href={`/international/${
														canadaProvinces.find((s) => s.val === geo.properties.CODE)?.slug
													}`}
												>
													<Marker coordinates={centroid}>
														<text
															y="2"
															fontSize={14}
															textAnchor="middle"
															onMouseEnter={() => setActiveGeo(geo.properties.CODE)}
															onMouseLeave={() => setActiveGeo("")}
															style={{ cursor: "pointer" }}
															fill={"#FFFFFF"}
														>
															{provinceCodes[cur.val]}
														</text>
													</Marker>
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

export default MapOfCanadaProvinces; 