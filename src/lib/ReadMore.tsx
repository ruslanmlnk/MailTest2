import { useState } from "react";

import { parseMarkdown } from "@/components/guides/seoCost";

export const ReadMore = ({
	children,
	limit,
	className,
	color = "white",
	dangerouslySetInnerHTML,
	title = "",
}: {
	children: string;
	limit: number;
	className?: string;
	color?: string;
	dangerouslySetInnerHTML?: boolean;
	title?: string;
}) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	if (dangerouslySetInnerHTML) {
		const content = isReadMore
			? parseMarkdown(text.slice(0, limit) + "...")
			: parseMarkdown(text);

		return (
			<div className={className}>
				<div
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>

				<span
					onClick={toggleReadMore}
					className="read-or-hide"
					style={{
						color: `${color}`,
						fontWeight: 600,
						bottom: 4,
						right: 0,
						position: "absolute",
					}}
				>
					{isReadMore ? "Read more" : " show less"}
				</span>
			</div>
		);
	}

	return (
		<>
			<p className={className} style={{ position: "relative" }}>
				<span
					style={{
						fontSize: "16px",
						fontWeight: "700",
						marginBottom: "5px",
						lineHeight: "20px",
					}}
				>
					{title}
				</span>
				{isReadMore ? text.slice(0, limit) + "..." : text}

				<span
					onClick={toggleReadMore}
					className="read-or-hide"
					style={{
						color: `${color}`,
						fontWeight: 600,
						bottom: 0,
						right: 0,
					}}
				>
					{isReadMore ? "Read more" : " show less"}
				</span>
			</p>
		</>
	);
};
