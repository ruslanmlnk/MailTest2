import Image from "next/image";
import React from "react";

import FollowImg1 from "@/../public/images/mainPage/followUs/follow-1.webp";
import FollowImg2 from "@/../public/images/mainPage/followUs/follow-2.webp";
import FollowImg3 from "@/../public/images/mainPage/followUs/follow-3.webp";
import FollowImg4 from "@/../public/images/mainPage/followUs/follow-4.webp";
import FollowImg5 from "@/../public/images/mainPage/followUs/follow-5.webp";
import BgImg from "@/../public/images/mainPage/followUs/follow-bg.svg";
import style from "@/styles/css/mainPage/followUs.module.css";

const FollowUs = () => {
	return (
		<section>
			<div className="block-container">
				<div className={style.header}>
					<div>
						<h4>subscribe to us</h4>
						<h2>
							Subscribe to us on
							<br /> Instagram
							<Image src={BgImg} alt="underline background image" />
						</h2>
					</div>
					<div>
						<p>
							There we post useful checklists <br /> and interesting customer
							stories
						</p>
						<a href="https://www.instagram.com/starvanlinesllc/?igshid=YmMyMTA2M2Y=">
							<button className="main">Subscribe</button>
						</a>
					</div>
				</div>
				<div className={style.collage}>
					<a href="https://www.instagram.com/p/Cu2PDRBoN_v/?igshid=MzRlODBiNWFlZA==">
						<Image
							src={FollowImg1}
							alt="subscribe to us on instagram image"
							placeholder="blur"
						/>
					</a>

					<a href="https://www.instagram.com/reel/CvK2gqygYhg/?igshid=MzRlODBiNWFlZA==">
						<Image
							src={FollowImg2}
							alt="subscribe to us on instagram image"
							placeholder="blur"
						/>
					</a>

					<a href="https://www.instagram.com/reel/Cu4pWizg6qz/?igshid=MzRlODBiNWFlZA==">
						<Image
							src={FollowImg3}
							alt="subscribe to us on instagram image"
							placeholder="blur"
						/>
					</a>

					<a href="https://www.instagram.com/p/CvFgsJ0sIz5/?igshid=MzRlODBiNWFlZA==">
						<Image
							src={FollowImg4}
							alt="subscribe to us on instagram image"
							placeholder="blur"
						/>
					</a>

					<a href="https://www.instagram.com/reel/Cu934HlgpHJ/?igshid=MzRlODBiNWFlZA==">
						<Image
							src={FollowImg5}
							alt="subscribe to us on instagram image"
							placeholder="blur"
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default FollowUs;
