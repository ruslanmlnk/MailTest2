import Image from "next/image";
import React, { useRef } from "react";

import TitleBg from "@/../public/images/about/hero-title-bg.svg";
import styles from "@/styles/css/about/ourTeam.module.css";

function OurTeam() {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<section>
			<div className={`block-container ${styles.container}`}>
				<div className={styles.header}>
					<span className={styles.preTitle}>our team</span>
					<div className={styles.titleWrapper}>
						<h2>
							Meet the team <br /> behind our company
						</h2>
						<Image src={TitleBg} alt="title-icon" />
					</div>
					<p>
						We take full responsibility for relocations and storage <br /> of
						goods in warehouses. We do all the work only by our team, so we
						guarantee that your cargo will be in safe hands and will remain
						intact
					</p>
				</div>

				<div className={styles.video} onClick={() => videoRef?.current?.play()}>
					<video
						width={"100%"}
						height={"100%"}
						controls
						style={{
							objectFit: "cover",
						}}
						ref={videoRef}
						preload="none"
						poster="/images/about/preview.jpg"
					>
						<source src="/svl_adv.mp4" type="video/mp4"></source>
					</video>
				</div>
			</div>
		</section>
	);
}

export default OurTeam;
