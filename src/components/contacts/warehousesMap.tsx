import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import style from "@/styles/css/contacts/warehousesMap.module.css";

import ArrowIcon from "../../../public/images/contacts/arrow-icon.svg";
import ArrowRight from "../../../public/images/contacts/arrow-right.svg";
import GoogleIcon from "../../../public/images/contacts/google.svg";
// assets
import PointIcon from "../../../public/images/mainPage/serviceMap/point-icon.svg";
import SearchBar from "../blog/searchBar";
import { DynamicWhMap } from "../map/dynamicMap";
import { IWarehouse, Warehouses } from "./lib/warehouses";

const WarehousesMap = () => {
	const [pickedWarehouseId, setPickedWarehouseId] = useState(-1);
	const [activeWarehouses, setActiveWarehouses] =
		useState<IWarehouse[]>(Warehouses);

	const warehousesContainer = useRef<HTMLDivElement>(null);

	const filterWarehouses = (query: string) => {
		if (query === "") {
			setActiveWarehouses(Warehouses);
			return;
		}

		setActiveWarehouses(
			Warehouses.filter((warehouse) =>
				(
					warehouse.address.toLowerCase() +
					" " +
					warehouse.state.toLowerCase()
				).includes(query?.toLowerCase() ?? ""),
			),
		);
	};

	const setPickedWarehouseIdHandler = (val: number) => {
		setPickedWarehouseId(val);
		if (val != -1) {
			warehousesContainer.current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
			});
		}
	};

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.title}>
					<div className={style.header}>
						<span className={style.preTitle}>warehouses map</span>
						<h2>
							Our warehouses in all <br />
							states of the United States
						</h2>
						<p>Choose the most suitable storage address for your belongings</p>
					</div>
					<SearchBar
						title={"Search Warehouses"}
						setSearch={filterWarehouses}
						search={null}
					/>
				</div>

				<div className={style.mapContainer}>
					<DynamicWhMap
						activeMarker={pickedWarehouseId}
						setActiveMarker={(val) => setPickedWarehouseIdHandler(val)}
					/>
					<div className={style.mapSettings}>
						<div className={style.warehousesWrapper}>
							<span className={style.h3}>Select a warehouse</span>
							<div
								className={`test ${style.warehouses}`}
								ref={warehousesContainer}
							>
								{activeWarehouses.map((item, index) => (
									<div
										className={`${style.warehouse} ${
											index == pickedWarehouseId && style.picked
										}`}
										onClick={() => setPickedWarehouseIdHandler(index)}
										key={index}
										ref={
											index == pickedWarehouseId ? warehousesContainer : null
										}
									>
										<div>
											<Image src={PointIcon} alt="point-icon" />
											<div className={style.info}>
												<span className={style.h3}>{item.address}</span>
												<p>Work: {item.worktime}</p>
												<p>Phone: {item.phone}</p>
											</div>
											<Image src={ArrowIcon} alt="arrow-icon" />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WarehousesMap;
