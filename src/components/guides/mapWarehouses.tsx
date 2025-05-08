import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

import { useMobile } from "@/lib/useMobile";

import ArrowIcon from "../../../public/images/contacts/arrow-icon.svg";
import ArrowRight from "../../../public/images/contacts/arrow-right.svg";
import GoogleIcon from "../../../public/images/contacts/google.svg";
import PointIcon from "../../../public/images/mainPage/serviceMap/point-icon.svg";
import style from "../../styles/css/guides/mapWarehouses.module.css";
import { IWarehouse } from "../contacts/lib/warehouses";
import GetAQuotePopup from "../getAQuotePopup";

const MapWarehouses: FC<{ warehouses: IWarehouse; stateName: string }> = ({
	warehouses,
	stateName,
}) => {
	const router = useRouter();
	const isMobile = useMobile();
	const [isPopupOpened, setIsPopupOpened] = useState(false);

	if (!warehouses) return null;

	return (
		<section>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<div className={style.container}>
				<div className={style.title}>
					<h4>warehouses map</h4>
					<h2>Our warehouses in {stateName}</h2>
					<p>Choose the most suitable storage address for your belongings</p>
				</div>

				<div className={style.mapContainer}>
					<div className={style.warehouseInformation}>
						<h3>Select a warehouse</h3>

						<div className={style.warehouse}>
							<div>
								<Image src={PointIcon} alt="point icon" />
								<div className={style.info}>
									<h3>{warehouses.address}</h3>
									<p>Work: {warehouses.worktime}</p>
									<p>Phone: {warehouses.phone}</p>
								</div>
								<Image src={ArrowIcon} alt="arrow right icon" />
							</div>
							<div className={style.border}></div>
							<div className={style.googleTransition}>
								<a
									href={warehouses.url}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => {
										if (warehouses.url === "") {
											e.preventDefault();
										}
									}}
								>
									<Image src={GoogleIcon} alt="google logo icon" />
									View in Google
									<Image src={ArrowRight} alt="arrow right icon" />
								</a>
							</div>
						</div>

						<div className={style.callToAction}>
							<h3>Looking for a moving company to relocate?</h3>
							<p>Discuss the details of your move with our experts.</p>
							<button className="main" onClick={() => setIsPopupOpened(true)}>
								Consultation
							</button>
						</div>
					</div>
					<div className={style.map}>
						<iframe
							width="100%"
							height="790"
							loading="lazy"
							src={warehouses.iframe}
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MapWarehouses;
