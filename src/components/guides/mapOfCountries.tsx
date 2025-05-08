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

import styles from "@/styles/css/guides/mapOfTheStates.module.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const countries = [
	{
		id: "630",
		val: "630",
		slug: "puerto-rico",
		name: "Puerto Rico"
	},
	{
		id: "124",
		val: "124",
		slug: "canada",
		name: "Canada"
	}
];

const MapOfCountries = ({ isMain }: { isMain?: boolean }) => {
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

	const countriesWithColors = countries.map((country) => ({
		fill: hexToRgb("#436AE5"),
		...country,
	}));

	const [activeGeo, setActiveGeo] = useState("");

	const renderMap = (countryId: string) => {
		return (
			<ComposableMap 
				projection="geoMercator"
				projectionConfig={{
					scale: countryId === "630" ? 30000 : 350,
					center: countryId === "630" ? [-66.5, 18.2] : [-95, 72]
				}}
				style={{
					width: '100%',
					height: '100%'
				}}
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) => (
						<>
							{geographies.map((geo) => {
								if (geo.id !== countryId) return null;
								
								return (
									<Link
										href={`/international/${countries.find(c => c.id === countryId)?.slug}`}
										key={geo.rsmKey}
									>
										<Geography
											stroke="#FFF"
											geography={geo}
											onMouseEnter={() => {
												setActiveGeo(geo.id);
											}}
											onMouseLeave={() => {
												setActiveGeo("");
											}}
											fill={geo.id === activeGeo ? "#F58D1D" : "#436AE5"}
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
								if (geo.id !== countryId) return null;
								const centroid = geoCentroid(geo);
								const cur = countriesWithColors.find((c) => c.id === countryId);
								if (!cur) return null;

								return (
									<g key={geo.rsmKey + "-name"}>
										<Link
											href={`/international/${cur.slug}`}
										>
											<Marker coordinates={centroid}>
												<text
													y="2"
													fontSize={32}
													textAnchor="middle"
													onMouseEnter={() => setActiveGeo(geo.id)}
													onMouseLeave={() => setActiveGeo("")}
													style={{ 
														cursor: "pointer", 
														fontWeight: 'bold',
														transform: countryId === "124" ? 'translateX(-80px)' : 'none'
													}}
													fill={"#FFFFFF"}
												>
													{cur.name}
												</text>
											</Marker>
										</Link>
									</g>
								);
							})}
						</>
					)}
				</Geographies>
			</ComposableMap>
		);
	};

	return (
		<div
			className={`block-container ${styles.container} ${isMain ? styles.isMain : ""}`}
		>
			<span className={styles.preTitle}>International Moving Services</span>
			<h2>Star Van Lines International Movers</h2>
			<div style={{ 
				display: 'flex',
				justifyContent: 'space-between',
				gap: '20px',
				width: '100%', 
				height: 'auto', 
				position: 'relative',
				marginTop: '20px',
				boxSizing: 'border-box',
				aspectRatio: '2/1'
			}}>
				<div style={{ width: '50%', height: '100%' }}>
					{renderMap("124")} {/* Canada */}
				</div>
				<div style={{ width: '50%', height: '100%' }}>
					{renderMap("630")} {/* Puerto Rico */}
				</div>
			</div>
		</div>
	);
};

export default MapOfCountries; 