import { Rating } from 'react-simple-star-rating';
import styles from './StarsRating.module.scss';
import { Star } from '../Icons';


export const StarsRating = ({
	handleRating,
}: {
	handleRating: (rate: number) => void;
}) => {
	
	return (
		<div className={styles.rating}>
			<Rating
				onClick={handleRating}
				emptyIcon={<Star />}
				fillIcon={<Star fill="#436AE5" />}
				className={styles.rating}
			/>
		</div>
	);
};
