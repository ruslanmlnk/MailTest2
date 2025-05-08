export type OurServicesListItemType = {
	slug: string,
	images: string,
	title: string,
	proposal: string[]
};

export type OurServicesProposalListType = {
	proposal: Array<string>
}

export type OurServicesListType = {
	list: Array<OurServicesListItemType>
}
