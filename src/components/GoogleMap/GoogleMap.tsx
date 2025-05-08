import styles from "./GoogleMap.module.scss";

interface IGoogleMapProps {
	src: string;
}

export const GoogleMap = ({ src }: IGoogleMapProps) => {
	return (
		<section className="block-container">
			<iframe
				className={styles.map}
				src={src}
				width="100%"
				height="460"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</section>
	);
};
