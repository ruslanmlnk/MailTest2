import { useCallback, useEffect, useRef, useState } from "react";

export function useStickySidebar(maxTopOffset: number, paddingBottom: number) {
	const aside = useRef<HTMLDivElement>(null);
	const [topOffset, setTopOffset] = useState(0);
	const prevScrollY = useRef(0);

	const asideOnScroll = useCallback((): void => {
		const scrollY: number = window.scrollY;
		const delta: number = scrollY - prevScrollY.current;

		if (delta > 0) {
			const minTopOffset: number = -(
				aside.current!.clientHeight -
				window.innerHeight +
				paddingBottom
			);
			setTopOffset((currentTopOffset) =>
				Math.max(currentTopOffset - delta, minTopOffset),
			);
		} else {
			setTopOffset((currentTopOffset) =>
				Math.min(currentTopOffset - delta, maxTopOffset),
			);
		}

		prevScrollY.current = scrollY;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", asideOnScroll);
		return () => window.removeEventListener("scroll", asideOnScroll);
	}, [asideOnScroll]);

	return { asideRef: aside, topOffset };
}
