import React from 'react';
import Image from 'next/image';

import InstaImg from '@/../public/images/mainPage/insta-img.webp';
import InstaIcon from '@/../public/images/mainPage/insta-icon.svg';

import styles from '@/styles/css/mainPage/new/instagram.module.css';

const Instagram = () => {
	return (
		<section>
			<div className={`block-container ${styles.container}`}>
				<div>
					<div className={styles.title}>
						<h2>
							From house to house:
							<br />
							our moves on Instagram!
						</h2>
						<h3>
							Be the first to hear about news and
							<br />
							moving tips from our customers.
						</h3>
						<div className={styles.subscribe}>
							<button
								onClick={() =>
									(window.location.href =
										'https://www.instagram.com/starvanlinesllc/?igshid=YmMyMTA2M2Y=')
								}
								className='main'
							>
								Subscribe
							</button>
							<Image src={InstaIcon} alt='' />
						</div>
					</div>
					<div className={styles.image}>
						<Image fill src={InstaImg} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Instagram;
