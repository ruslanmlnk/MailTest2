import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from '@/styles/css/mainPage/ourProcess.module.css';
import Arrow from '@/../public/images/mainPage/arrow.svg';

import CardIcon from '@/../public/images/mainPage/houseOrange-icon.svg';

export interface ICard {
	icon: StaticImageData;
	title: string;
	description: string;
}

const OurProcess = () => {
	const cards: ICard[] = [
		{
			icon: CardIcon,
			title: '1. Получите оценку',
			description:
				'Дома, квартиры, многоэтажки, офисные здания и другие дома, квартиры, многоэтажки, офисные здания и другие',
		},
		{
			icon: CardIcon,
			title: '2. План переезда',
			description:
				'Дома, квартиры, многоэтажки, офисные здания и другие дома, квартиры, многоэтажки, офисные здания и другие',
		},
		{
			icon: CardIcon,
			title: '3. За дело!',
			description:
				'Дома, квартиры, многоэтажки, офисные здания и другие дома, квартиры, многоэтажки, офисные здания и другие',
		},
	];

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div className={style.header}>
					<div className={style.title}>
						<h4>Our process</h4>
						<h2>
							A simple yet <span> powerful </span> <br /> and efficient process
						</h2>
						<p>
							We offer comprehensive services for moving homes and businesses, packing
							and unpacking, as well as garbage removal
						</p>
					</div>
					<div>
						<button className='main'>
							Get a quote <Image src={Arrow} alt='' />
						</button>
					</div>
				</div>
				<div className={style.cards}>
					
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
