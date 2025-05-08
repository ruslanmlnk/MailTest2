import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface IAnimatedNumber {
	value: number;
	duration: number;
}

export const AnimatedNumber: FC<IAnimatedNumber> = ({ value, duration }) => {
	const [count, setCount] = useState<number>(0);
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		let startTime: number = 0;
		const step: any = (time: any) => {
			if (!startTime) startTime = time;
			const progress = (time - startTime) / duration;
			setCount(Math.floor(progress * value));
			if (progress < 1) window.requestAnimationFrame(step);
		};
		if (inView) window.requestAnimationFrame(step);
		return () => window.cancelAnimationFrame(step);
	}, [inView]);

	if (count > value) setCount(value);
	
	return (
		<>
			<span ref={ref}>{inView ? count : '0'}</span>
		</>
	);
};
