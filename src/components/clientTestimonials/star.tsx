type StarProps = {
	fill: string;
};

export const Star = ({ fill = "empty" }: StarProps) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{fill === "full" && (
					<linearGradient id="full">
						<stop offset="100%" stopColor="#436AE5" />
						<stop offset="100%" stopColor="#BAC7F3" />
					</linearGradient>
				)}
				{fill === "half" && (
					<linearGradient id="half">
						<stop offset="50%" stopColor="#436AE5" />
						<stop offset="50%" stopColor="#BAC7F3" />
					</linearGradient>
				)}
				{fill === "empty" && (
					<linearGradient id="empty">
						<stop offset="0%" stopColor="#436AE5" />
						<stop offset="0%" stopColor="#BAC7F3" />
					</linearGradient>
				)}
			</defs>
			<path
				d="M8.0511 2.24879C8.69017 0.281938 11.4727 0.281936 12.1118 2.24879L12.9573 4.85083C13.2431 5.73043 14.0628 6.32597 14.9876 6.32597H17.7236C19.7916 6.32597 20.6515 8.97235 18.9784 10.1879L16.765 11.7961C16.0167 12.3397 15.7036 13.3033 15.9894 14.1829L16.8349 16.785C17.474 18.7518 15.2228 20.3874 13.5497 19.1718L11.3363 17.5636C10.5881 17.02 9.57486 17.02 8.82663 17.5636L6.6132 19.1718C4.9401 20.3874 2.68895 18.7518 3.32802 16.785L4.17347 14.1829C4.45927 13.3033 4.14618 12.3397 3.39795 11.7961L1.18452 10.1879C-0.488587 8.97235 0.371274 6.32597 2.43934 6.32597H5.17529C6.10016 6.32597 6.91985 5.73043 7.20565 4.85083L8.0511 2.24879Z"
				fill={`url(#${
					(fill === "full" && "full") ||
					(fill === "half" && "half") ||
					(fill === "empty" && "empty")
				})`}
			/>
		</svg>
	);
};
