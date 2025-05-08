import Image from "next/image";
import React from "react";

import CTAWideImage from "@/../public/images/blog/article/ctaWide.jpg";
import GetAQuotePopup from "@/components/getAQuotePopup";
import styles from "@/styles/css/blog/articles/articleCTAWide.module.css";

const ArticleCTAWide = () => {
	const [isPopupOpened, setIsPopupOpened] = React.useState(false);

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<div className={`block-container ${styles.articleCTA}`}>
				<div>
					<div className={styles.content}>
						<div>
							<h3>Planning a move?</h3>
							<p>Get an estimate for your move right now.</p>
						</div>
						<button className="main" onClick={() => setIsPopupOpened(true)}>
							Get a quote
						</button>
					</div>
					<Image src={CTAWideImage} alt="get a quote article image SVL" />
				</div>
			</div>
		</>
	);
};

export default ArticleCTAWide;
