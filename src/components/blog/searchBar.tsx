import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import SearchIcon from "../../../public/images/blog/search-icon.svg";
import style from "../../styles/css/blog/searchBar.module.css";

interface ISearch {
	setSearch: (arg: any) => void;
	title: string;
	search: string | null;
	className?: string;
	// onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchBar: FC<ISearch> = ({
	setSearch,
	title,
	search,
	className = "",
}) => {
	const router = useRouter();
	const inputRef = React.useRef<HTMLInputElement>(null);

	const setRouterQuery = (search: string) => {
		router.query.search = search;
		// router.query["page-number"] = "1";
		router.push(router, undefined, { scroll: false });
	};

	const handleSearch = (search: string) => {
		router.query.search = search;
		router.query["page-number"] = "1";
		router.push(router, undefined, { scroll: false });
	};

	// useEffect(() => {
	// 	if (search == "") {
	// 		setRouterQuery("");
	// 	}
	// }, [search]);

	return (
		<div className={`${style.search_bar} ${className}`}>
			<div className={style.search_title}>
				<span className={style.title}>{title}</span>

				{(search || router.query.search) && (
					<div
						className={style.searchQuery}
						onClick={() => {
							setSearch(null);
							setRouterQuery("");
						}}
					>
						<p>Clear search</p>
					</div>
				)}
			</div>

			<div className={style.search_input}>
				<input
					ref={inputRef}
					id="searchInput"
					type="text"
					placeholder="Search"
					value={search ?? router.query.search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							if (search) {
								handleSearch(search);
							}
						}
					}}
				/>

				<button
					className="main"
					onClick={() => {
						if (search) {
							handleSearch(search);
						}
					}}
				>
					Search
				</button>
				<Image src={SearchIcon} alt="search-icon" />
			</div>
		</div>
	);
};

export default SearchBar;
