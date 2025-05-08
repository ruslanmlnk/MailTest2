import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { useMobile } from "@/lib/useMobile";
import { ITrustedPartner } from "@/store/guides/stateMapStore";
import style from "@/styles/css/guides/trustedPartner.module.css";

const TrustedPartner: FC<{ store: ITrustedPartner }> = ({ store }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const isMobile = useMobile();
	const [isAnimating, setIsAnimating] = useState(false);

	const handleButtonClick = (index: number) => {
		if (!isAnimating) {
			setIsAnimating(true);
			setTimeout(() => {
				setActiveIndex(index);
				setIsAnimating(false);
			}, 300);
		}
	};
	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.header}>
					<h4>trusted partner</h4>
					<h2 dangerouslySetInnerHTML={{ __html: store.title }}></h2>
					<p>{store.description}</p>
				</div>
				<div>
					{isMobile && (
						<div className={style.buttons}>
							{store.points.map((point, index) => (
								<button
									key={index}
									className={index === activeIndex ? style.activeButton : ""}
									onClick={() => handleButtonClick(index)}
								>
									{point.subtitle}
								</button>
							))}
						</div>
					)}
					<div className={style.blockText}>
						{store.points.map((point, index) => (
							<div
								key={index}
								className={style.text}
								style={{
									display: isMobile
										? index === activeIndex
											? "grid"
											: "none"
										: "grid",
								}}
							>
								<Image src={point.image.src} alt={store.title} />
								<div className={style.textMain}>
									<h2>{point.title}</h2>
									<p>{point.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustedPartner;
