import React, { useState } from "react";

import { parseMarkdown } from "@/components/guides/seoCost";

function ReadMoreOverflow({
	children,
	className,
}: {
	children: string;
	className?: string;
}) {
	const fontSize = 14;
	const lineHeight = 1.65;
	const lines = 3;
	const height = fontSize * lineHeight * lines;

	const [isReadMore, setIsReadMore] = useState(true);

	return (
		<div style={{ position: "relative" }} className={className}>
			<div
				style={{
					height: isReadMore ? height : "auto",
					fontSize,
					lineHeight,
					overflow: "hidden",
				}}
				dangerouslySetInnerHTML={{ __html: parseMarkdown(children) }}
			></div>
			<span
				onClick={() => setIsReadMore(!isReadMore)}
				style={{
					position: "absolute",
					bottom: "-14px",
					right: 0,
					color: "#fff",
					fontWeight: 500,
				}}
			>
				{isReadMore ? "Read more" : "See less"}
			</span>
		</div>
	);
}

export default ReadMoreOverflow;
