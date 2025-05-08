import Image from "next/image";
import React from "react";

import trademark from "./imgs/trademark.jpg";
import styles from "./verifiedTrademark.module.scss";

export const VerifiedTrademark = () => {
	return (
		<section className={styles.ct}>
			<div className={styles.employee}>
				<Image
					className={styles.imgMob}
					src={trademark}
					objectFit="cover"
					alt="About our company SVL"
					quality={100}
					sizes="100vw"
				/>
				<div className={styles.information}>
					<h2>Verified Trademark Certificate</h2>
					<p>
						Here you can see the official verified Trademark certificate, which
						confirms the rights to the uniqueness and security of our brand.
						This certificate guarantees the legitimacy and reliability of our
						product or service, providing additional confidence for our
						customers.
					</p>
					<div className={styles.subText}>
						<p>
							{"Reg. No. 7,630,814 \n"}
							{"Registered Dec. 31, 2024 \n"}

							{"Int. CL: 39 \n"}
							{"Service Mark \n"}
							{"Principal Register \n"}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
