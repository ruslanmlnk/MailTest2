import Waypoint from '../../../public/images/mainPage/serviceMap/waypoint.svg';

import L, { ControlOptions } from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';

import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import mapStore from '@/store/mapStore';

export interface ILatLng {
	lat: number;
	lng: number;
}

const createRoutineMachineLayer = (props: any) => {
	L.Marker.prototype.options.icon = L.icon({
		iconUrl: Waypoint.src,
		iconSize: [38, 95],
		iconAnchor: [20, 75],
	});

	const instance = L.Routing.control({
		router: L.Routing.mapbox(
			'pk.eyJ1IjoidGVtYW1pbnQiLCJhIjoiY2xoNHZiaHJ2MjFxZTNncXZvcGVuc3RkdCJ9.FRXZWVp9FMhjeW6g7QlkzA',
			{ profile: 'mapbox/driving' }
		),
		waypoints: [L.latLng(mapStore.centers[0]), L.latLng(mapStore.centers[1])],
		lineOptions: {
			extendToWaypoints: true,
			missingRouteTolerance: 1,
			styles: [
				{
					color: '#F58D1D',
					weight: 3,
				},
			],
		},
		show: false,
		addWaypoints: false,
		routeWhileDragging: true,
		fitSelectedRoutes: true,
		showAlternatives: false,
	});

	instance.on('routesfound', function (e: any) {
		let routes = e.routes;
		let summary = routes[0].summary;
		mapStore.setDistance(summary.totalDistance / 1000);

		// let centers: ILatLng[] = [
		// 	instance.getWaypoints()[0].latLng,
		// 	instance.getWaypoints()[1].latLng,
		// ];

		// mapStore.updateByCenters(centers);
	});

	return instance;
};

const Routing = createControlComponent(createRoutineMachineLayer);
export default observer(Routing);
