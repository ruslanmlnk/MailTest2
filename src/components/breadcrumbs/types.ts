export interface IBreadCrumb {
	name: string;
	url: string;
}

export interface IBreadCrumbsProps {
	breadcrumbsArr: IBreadCrumb[];
	isDark?: boolean;
	withPadding?: boolean;
	truncate?: boolean;
	className?: string;
	isServicePage?: boolean;
	extraPadding?: boolean;
}
