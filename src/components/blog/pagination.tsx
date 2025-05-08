import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, Fragment } from "react";

import style from "@/styles/css/blog/pagination.module.css";
import { search } from "@notionhq/client/build/src/api-endpoints";

interface IPagination {
	items: number;
	currentPage: number;
	pageSize: number;
}

interface IPaginationHook {
	items: number;
	currentPage: number;
	pageSize: number;
}

const getPages = (length: number, inc: number = 1) =>
	Array.from({ length }, (_, i) => i + inc);

export const usePagination = ({
	items,
	currentPage,
	pageSize,
}: IPaginationHook): (number | "...")[] => {
	const totalPages = Math.ceil(items / pageSize);

	if (totalPages <= 5) {
		return getPages(totalPages);
	}
	if (currentPage <= 3) {
		return [1, 2, 3, 4, "...", totalPages];
	}
	if (currentPage < totalPages - 2) {
		return [
			1,
			"...",
			currentPage - 1,
			currentPage,
			currentPage + 1,
			"...",
			totalPages,
		];
	}
	return [1, "...", ...getPages(4, totalPages - 3)];
};

const Pagination: FC<IPagination> = ({ items, currentPage, pageSize }) => {
	const pages: (number | "...")[] = usePagination({
		items,
		currentPage,
		pageSize,
	});

	const router = useRouter();

	return (
		<div className={style.pagination}>
			{pages.map((page, index) =>
				page === "..." ? (
					<div key={index} className={`${style.pageItem}`}>
						<p className={style.pageLink}>{page}</p>
					</div>
				) : (
					<Fragment key={index}>
						<Link
							rel="canonical"
							href={
								page !== 1
									? {
											pathname: `/blog/page/${page}`,
											query: router.query.search
												? router.query.tag
													? {
															search: router.query.search,
															tag: router.query.tag,
													  }
													: {
															search: router.query.search,
													  }
												: router.query.tag
												? {
														tag: router.query.tag,
												  }
												: null,
									  }
									: {
											pathname: "/blog",
											query: router.query.search
												? router.query.tag
													? {
															search: router.query.search,
															tag: router.query.tag,
													  }
													: {
															search: router.query.search,
													  }
												: router.query.tag
												? {
														tag: router.query.tag,
												  }
												: null,
									  }
							}
							className={`${style.pageItem} ${
								page === currentPage ? style.active : ""
							}`}
						>
							<p className={style.pageLink}>{page}</p>
						</Link>
					</Fragment>
				),
			)}
		</div>
	);
};

export default Pagination;
