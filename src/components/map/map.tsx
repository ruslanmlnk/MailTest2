import L from "leaflet";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import mapStore from "@/store/mapStore";
import style from "@/styles/css/mainPage/serviceMap.module.css";

import Routing from "./routing";

const Map = () => {
	const rMapRoutingMachine = useRef<any>();

	useEffect(() => {
		const cleanup = autorun(() => {
			const json = JSON.stringify(mapStore.centers);
			rMapRoutingMachine.current.setWaypoints([
				L.latLng(mapStore.centers[0]),
				L.latLng(mapStore.centers[1]),
			]);
		});
		return cleanup;
	}, []);

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
			<Routing ref={rMapRoutingMachine} />
			<ZoomControl position="topright" />
		</MapContainer>
	);
};

export default observer(Map);
