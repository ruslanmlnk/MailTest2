import Image from "next/image";
import React from "react";

import CTAShortImage from "@/../public/images/blog/article/ctaShort.jpg";
import GetAQuotePopup from "@/components/getAQuotePopup";
import styles from "@/styles/css/blog/articles/articleCTAShort.module.css";

const ArticleCTAShort = () => {
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
				<div className={styles.content}>
					<div>
						<h3>Planning a move?</h3>
						<p>Get an estimate for your move right now.</p>
					</div>
					<button className="main" onClick={() => setIsPopupOpened(true)}>
						Get a quote
					</button>
				</div>
				<Image src={CTAShortImage} alt="article-image SVL" />
			</div>
		</>
	);
};

export default ArticleCTAShort;
