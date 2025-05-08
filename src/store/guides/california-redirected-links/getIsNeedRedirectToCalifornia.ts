import { californiaRedirectedLinks } from "./californiaRedirectedLinks";

export const getIsNeedRedirectToCalifornia = (path: string) => {
	return californiaRedirectedLinks.some((link) => link === path);
};
