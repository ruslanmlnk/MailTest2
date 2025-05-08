import L from "leaflet";
import { FC, useEffect } from "react";
import {
	MapContainer,
	Marker,
	TileLayer,
	ZoomControl,
	useMap,
} from "react-leaflet";
import { useMediaQuery } from "react-responsive";

import { useMobile } from "@/lib/useMobile";
import style from "@/styles/css/contacts/warehousesMap.module.css";

import { Warehouses } from "./lib/warehouses";

var InactiveMarker = L.icon({
	iconUrl: "/images/contacts/marker-inactive.svg",
	iconSize: [20, 20],
	iconAnchor: [10, 10],
});

var ActiveMarker = L.icon({
	iconUrl: "/images/contacts/marker-active.svg",
	iconSize: [20, 20],
	iconAnchor: [10, 10],
});

type setActiveMarkerType = (val: number) => void;

interface IWarehousesMap {
	activeMarker: number;
	setActiveMarker: setActiveMarkerType;
}

interface ICustomMarker {
	position: [number, number];
	activeMarker: number;
	setActiveMarker: setActiveMarkerType;
	index: number;
	icon: any;
}

const CustomMarker: FC<ICustomMarker> = ({
	position,
	activeMarker,
	icon,
	index,
	setActiveMarker,
}) => {
	const map = useMap();

	useEffect(() => {
		if (activeMarker == index) {
			map.setView(position, 10);
		}
	}, [activeMarker]);

	return (
		<Marker
			eventHandlers={{
				click: () => {
					map.setView(position, 10);
					setActiveMarker(index);
				},
			}}
			position={position}
			icon={icon}
			key={index}
		/>
	);
};

const warehousesMap: FC<IWarehousesMap> = ({
	activeMarker,
	setActiveMarker,
}) => {
	const isMobile = useMobile();

	return (
		<MapContainer
			className={style.leafletMap}
			center={[39.82707846220262, -101.67517122481061]}
			zoom={5.2}
			scrollWheelZoom={false}
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{Warehouses.map((warehouse, index) => (
				<CustomMarker
					position={warehouse.position}
					icon={index === activeMarker ? ActiveMarker : InactiveMarker}
					activeMarker={activeMarker}
					setActiveMarker={setActiveMarker}
					key={index}
					index={index}
				/>
			))}
			<ZoomControl position="bottomright" />
		</MapContainer>
	);
};

export default warehousesMap;
