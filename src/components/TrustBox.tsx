import React from "react";

interface TrustBoxProps {
	templateId: string;
	businessUnitId: string;
}

const TrustBox: React.FC<TrustBoxProps> = ({ templateId, businessUnitId }) => {
	const ref = React.useRef(null);

	React.useEffect(() => {
		// @ts-ignore
		if (window.Trustpilot) {
			// @ts-ignore
			window.Trustpilot.loadFromElement(ref.current, true);
		}
	}, []);

	return (
		<div
			ref={ref}
			className="trustpilot-widget"
			data-locale="en-US"
			data-template-id={templateId}
			data-businessunit-id={businessUnitId}
			data-style-height="100%"
			data-style-width="100%"
			data-theme="light"
		>
			<a
				href="https://www.trustpilot.com/review/starvanlinesmovers.com"
				target="_blank"
				rel="noopener"
			>
				Trustpilot
			</a>
		</div>
	);
};

export default TrustBox;
