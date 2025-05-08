import style from '@/styles/css/calculator/sliderPagination.module.css';

import { FC, useState } from 'react';

interface ISliderPagination {
	sliderLenght: number;
	activeSlide: number;
}

const sliderPagination: FC<ISliderPagination> = ({ sliderLenght, activeSlide }) => {
	const fillSlides = () => {
		let slides: number[] = [];

		for (let i = 0; i < sliderLenght; i++) {
			slides.push(i + 1);
		}

		return slides;
	};

	const slides: number[] = fillSlides();

	return (
		<div className={style.container}>
			<div className={style.divider} />
			{slides.map((item, index) => (
				<>
					<div
						className={`${style.point} ${activeSlide == item && style.active} ${
							activeSlide > item && style.completed
						}`}
					>
						<p>{item}</p>
					</div>
					<div className={style.divider} />
				</>
			))}
		</div>
	);
};

export default sliderPagination;
