import clsx from "clsx";

import styles from "./ConsumerReviewsCarousel.module.scss";

interface ConsumerReviewsCarouselProps {
	className?: string;
}

export const ConsumerReviewsCarousel = ({
	className,
}: ConsumerReviewsCarouselProps) => {
	return (
		<section className={clsx(styles.section, className)}>
			<div className={styles.container}>
				<iframe
                    scrolling="no"
					id="perIframe-1742394693"
					src="https://aspect.consumeraffairs.com/widget?id=25100&variantType=horizontalcar&showReviewsBy=time&stars=5,4&theme=light&reviewCards=medium&cardColor=alpha-gray&paginate_by=5&desktopCols=2&carouselSpeed=medium&mobileCols=1&numberPerRow=2&showStarRating=true&showReviewCount=true&showCreated=true&showReviewerName=true&showCity=true&showState=true"
				/>
			</div>
		</section>
	);
};
