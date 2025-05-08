// !TEMPORARY DEACTIVATED

import React from 'react';
import style from '@/styles/css/mainPage/aboutUs.module.css';
import Image from 'next/image';

import About from '../../../public/images/mainPage/about.jpg';

const AboutUs = () => {
	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div>
					<Image className={style.image} src={About} alt='' />
				</div>
				<div className={style.text}>
					<h4>about us</h4>
					<h2>
						<span>Star Vanlines </span> makes your life easier
					</h2>
					<div className={style.description}>
						<p>
							We offer comprehensive home and business moving, packing and unpacking,
							and junk removal services.
						</p>
						<p>
							We proudly offer professionally trained movers along with
							top-of-the-line equipment and resources to exceed your expectations.
						</p>
					</div>

					<button className='add'>Learn more</button>
					<div className={style.section_background} />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
