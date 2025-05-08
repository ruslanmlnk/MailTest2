import clsx from "clsx";
import Image from "next/image";

import AddIcon from "@/../public/images/calculator/add-icon.svg";

import minusL from "../../../../public/images/calculator/minus-light.svg";
import minus from "../../../../public/images/calculator/minus.svg";
import plusL from "../../../../public/images/calculator/plus-light.svg";
import plus from "../../../../public/images/calculator/plus.svg";
import styles from "./icons.module.scss";

export type iconType = "transparent" | "blue" | "lightBlue" | "red";

export interface IIconProps {
	type?: iconType;
	onClick?: Function;
	className?: string;
}

const SOURCES_PLUS = {
	transparent: plus,
	blue: AddIcon,
	lightBlue: plusL,
};

const SOURCES_MiNUS = {
	transparent: minus,
	blue: minus,
	lightBlue: minusL,
};

export const PlusIcon = ({
	type = "transparent",
	onClick = () => {},
	className = "",
}: IIconProps) => {
	return (
		<Image
			src={SOURCES_PLUS[type as keyof typeof SOURCES_PLUS]}
			alt="minus-icon"
			width={25}
			height={25}
			onClick={() => onClick()}
			className={className}
		/>
	);
};

export const MinusIcon = ({
	type = "transparent",
	onClick = () => {},
	className = "",
}: IIconProps) => {
	return (
		<Image
			src={SOURCES_MiNUS[type as keyof typeof SOURCES_MiNUS]}
			alt="minus-icon"
			width={25}
			height={25}
			onClick={() => onClick()}
			className={className}
		/>
	);
};
