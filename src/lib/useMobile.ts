import { useEffect, useState } from "react";

export function useMobile(initialState?: boolean) {
	const [isMobile, setIsMobile] = useState<boolean>(
		initialState ? initialState : false,
	);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isMobile;
}
