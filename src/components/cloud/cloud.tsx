import clsx from "clsx";
import parse from "html-react-parser";

import { parseMarkdown } from "@/components/guides/seoCost";

import styles from "./cloud.module.scss";

export interface ICloude {
	content: string;
	isArticleBlock?: boolean;
}

export const Cloud = ({ content, isArticleBlock }: ICloude) => {
	return (
		<div
			className={clsx(
				"block-container",
				styles.container,
				isArticleBlock ? styles.articleBlock : "",
			)}
		>
			<div className={styles.wrapper}>
				{parse(parseMarkdown(content) || "")}
			</div>
		</div>
	);
};
