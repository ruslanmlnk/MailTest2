import styles from "./RoundNumber.module.scss";

export interface IRoundNumberProps {
	value: number;
}

const RoundNumber = ({ value }: IRoundNumberProps) => {
	return (
		<div className={styles.circle}>
			<p className={styles.circle_item}>{value}</p>
		</div>
	);
};

export default RoundNumber;
