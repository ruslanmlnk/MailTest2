import React, { useState } from 'react';
import style from '@/styles/css/about/specialists.module.css';
import Image, { StaticImageData } from 'next/image';

import Arrow from '@/../public/images/mainPage/arrow.svg';

import Specialist1 from '@/../public/images/mainPage/specialists/specialist1.jpg';
import Specialist2 from '@/../public/images/mainPage/specialists/specialist2.jpg';
import Specialist3 from '@/../public/images/mainPage/specialists/specialist3.jpg';

interface ISpecialist {
	image: StaticImageData;
	title: string;
	role: string;
	description: string;
}

const Specialists = () => {
	const specialists: ISpecialist[] = [
		{
			image: Specialist1,
			title: 'John Carter',
			role: 'dispatcher',
			description: 'It is engaged in route planning and organization of cargo delivery.',
		},
		{
			image: Specialist2,
			title: 'Michael Jackson',
			role: 'test',
			description: 'It is engaged in route planning and organization of cargo delivery.',
		},
		{
			image: Specialist3,
			title: 'Hee Hee',
			role: 'cool guy',
			description: 'It is engaged in route planning and organization of cargo delivery.',
		},
	];

	const [currentSpecialist, setCurrentSpecialist] = useState<number>(0);

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div>
					{specialists.map((item, index) => (
						<div
							key={index}
							className={`${style.specialist} ${
								currentSpecialist == index ? style.active : ''
							}`}
						>
							<div className={style.image}>
								<Image src={item.image} alt='' />
							</div>
							<div className={style.text}>
								<h3>{item.title}</h3>
								<h4>{item.role}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					))}

					<div className={style.slider_controller}>
						<div
							onClick={() => {
								setCurrentSpecialist((prev) =>
									prev == 0 ? specialists.length - 1 : prev - 1
								);
							}}
						>
							<Image src={Arrow} alt='' />
						</div>
						<div
							onClick={() => {
								setCurrentSpecialist((prev) =>
									prev == specialists.length - 1 ? 0 : prev + 1
								);
							}}
						>
							<Image src={Arrow} alt='' />
						</div>
					</div>
				</div>
				<div className={style.title}>
					<h4>our team</h4>
					<h2>
						Meet the<span> team</span> <br /> behind our company
					</h2>
					<p>
						We take full responsibility for relocations and storage of goods in
						warehouses. We do all the work only by our team, so we guarantee that your
						cargo will be in safe hands and will remain intact
					</p>

					<div className={style.slider_controller}>
						<div
							onClick={() => {
								setCurrentSpecialist((prev) =>
									prev == 0 ? specialists.length - 1 : prev - 1
								);
							}}
						>
							<Image src={Arrow} alt='' />
						</div>
						<div
							onClick={() => {
								setCurrentSpecialist((prev) =>
									prev == specialists.length - 1 ? 0 : prev + 1
								);
							}}
						>
							<Image src={Arrow} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Specialists;
