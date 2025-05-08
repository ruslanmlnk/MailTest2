import { FC } from "react";

import style from "@/styles/css/mainPage/сarefullTransportation.module.css";
import type { CarefulTransportationListItemType } from "@/types/CarefulTransportation";

import CarefulTransportationList from "./components/List/Index";

const list: Array<CarefulTransportationListItemType> = [
	{
		title: "We use high quality packaging materials",
	},
	{
		title: "We fasten the boxes with special straps",
	},
	{
		title: "We individually pack fragile goods",
	},
];

const CarefulTransportation: FC = () => {
	return (
		<div className={style.carefulTransportation}>
			<div className={style.carefulTransportationContainer}>
				<p className={style.carefulTransportationSubTitle}>careful transport</p>

				<h2 className={style.carefulTransportationTitle}>
					Special care for your belongings
				</h2>

				<CarefulTransportationList list={list} />
			</div>
		</div>
	);
};

export default CarefulTransportation;
