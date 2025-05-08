"use client";

import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

// import mapStore from "@/store/mapStore";
import style from "@/styles/css/mainPage/serviceMap.module.css";
import { createControlComponent } from "@react-leaflet/core";

import Waypoint from "../../../../public/images/mainPage/serviceMap/waypoint.svg";
import { ILatLng } from "../routing";
import styles from "./RoutesMap.module.scss";

export type Points = [ILatLng, ILatLng];

const createRoutineMachineLayer = (props: any) => {
	L.Marker.prototype.options.icon = L.icon({
		iconUrl: Waypoint.src,
		iconSize: [38, 95],
		iconAnchor: [20, 75],
	});

	const instance = L.Routing.control({
		router: L.Routing.mapbox(
			"pk.eyJ1IjoidGVtYW1pbnQiLCJhIjoiY2xoNHZiaHJ2MjFxZTNncXZvcGVuc3RkdCJ9.FRXZWVp9FMhjeW6g7QlkzA",
			{ profile: "mapbox/driving" },
		),
		waypoints: [L.latLng(props.points[0]), L.latLng(props.points[1])],
		lineOptions: {
			extendToWaypoints: true,
			missingRouteTolerance: 1,
			styles: [
				{
					color: "#F58D1D",
					weight: 3,
				},
			],
		},
		show: false,
		addWaypoints: false,
		routeWhileDragging: false,
		fitSelectedRoutes: true,
		showAlternatives: false,
	});

	return instance;
};

const Routing = createControlComponent(createRoutineMachineLayer);

interface RoutingProps {
	points?: Points;
}

const RoutesMap = ({ points }: RoutingProps) => {
	return (
		<MapContainer
			className={`${style.leafletMap} ${styles.map}`}
			center={[39.82707846220262, -101.67517122481061]}
			zoom={5.2}
			scrollWheelZoom={false}
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{points && <Routing points={points} />}
			<ZoomControl position="topright" />
		</MapContainer>
	);
};

export default RoutesMap;
