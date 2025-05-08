import Image from "next/image";
import React, { FC } from "react";

import SearchIcon from "../../../public/images/blog/search-icon.svg";
import style from "../../styles/css/blog/searchBar.module.css";

interface ISearch {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	title: string;
	search: string;
	className?: string;
	// onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchBar: FC<ISearch> = ({ setSearch, title, search, className }) => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	return (
		<div className={`${style.search_bar} ${className}`}>
			<div className={style.search_title}>
				<h4>{title}</h4>
			</div>

			<div className={style.search_input}>
				<input
					ref={inputRef}
					id="searchInput"
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<button className="main">Search</button>
				<Image src={SearchIcon} alt="search icon" />
			</div>
		</div>
	);
};

export default SearchBar;
