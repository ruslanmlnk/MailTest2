import Image from "next/image";
import { useState } from "react";

import style from "@/styles/css/about/ourMission.module.css";

import Arrow from "../../../public/images/mainPage/button-arrow.svg";
import { AnimatedNumber } from "../animatedNumber";
import GetAQuotePopup from "../getAQuotePopup";

const OurMission = () => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<section className={style.section}>
				<div className={`block-container ${style.container}`}>
					<div className={style.cards}>
						<div>
							<div>
								<span className={style.h3}>
									+
									<AnimatedNumber value={12} duration={1000} />
									<b>K</b>
								</span>
								<p>Completed relocations</p>
							</div>
							<div>
								<span className={style.h3}>
									<AnimatedNumber value={100} duration={1000} />%
								</span>
								<p>Clients satisfaction</p>
							</div>
						</div>
						<div>
							<div>
								<span className={style.h3}>
									+
									<AnimatedNumber value={65} duration={1000} />
								</span>
								<p>Team members</p>
							</div>
							<div>
								<span className={style.h3}>
									+
									<AnimatedNumber value={10} duration={1000} />
									<b>Y</b>
								</span>
								<p>Years of experience</p>
							</div>
						</div>
					</div>
					<div className={style.title}>
						<span className={style.preTitle}>Advantages</span>
						<h2>
							<span>Star Van Lines</span> today
						</h2>
						<p>
							We perform over 30 of the highest quality moves nationwide every
							day, even over the longest distances! Starting out in 2016 as a
							small family business, we've become a company that has taken a
							step toward building a professional moving culture for the mass
							market in the United States.
						</p>
						<div className={style.buttons}>
							<button className="main" onClick={() => setIsPopupOpened(true)}>
								Get a quote
								<Image src={Arrow} alt="arrow-icon" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurMission;
