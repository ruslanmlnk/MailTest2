import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Arrow from "../../../public/images/mainPage/button-arrow.svg";
import style from "../../styles/css/services/calculatorInfo.module.css";
import GetAQuotePopup from "../getAQuotePopup";

const CalculatorInfo = () => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	return (
		<section className={style.section}>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<div className={`block-container ${style.container}`}>
				<div>
					<span className={style.title}>Moving cost calculator</span>
					<p className={style.subtitle}>
						<span>Know</span> your moving price in 2 minutes
					</p>
					<p>
						Moving calculator is easy to use and helpful in moving process! Get
						your exact price and be prepared, no hidden fees!
					</p>
					<div className={style.buttons}>
						<button className="main" onClick={() => setIsPopupOpened(true)}>
							Get a quote <Image src={Arrow} alt="arrow right icon" />
						</button>
						<Link href="/calculator">
							<button className="add">Calculate Cost</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CalculatorInfo;
