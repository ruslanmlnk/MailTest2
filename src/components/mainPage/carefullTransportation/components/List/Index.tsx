import Image from "next/image";
import { FC } from "react";

import style from "@/styles/css/mainPage/сarefullTransportation.module.css";
import type { CarefulTransportationList } from "@/types/CarefulTransportation";

const CarefulTransportationList: FC<CarefulTransportationList> = ({ list }) => {
	return (
		<ul className={style.carefulTransportationList}>
			{list.map((item) => (
				<li key={item.title} className={style.carefulTransportationListItem}>
					<div className={style.carefulTransportationListItemContent}>
						<div className={style.carefulTransportationListItemChecked}>
							<Image
								src="/images/mainPage/carefullTransportation/icon.svg"
								alt="Icon checked"
								width={50}
								height={50}
							/>
						</div>

						<p className={style.carefulTransportationListItemTitle}>
							{item.title}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CarefulTransportationList;
