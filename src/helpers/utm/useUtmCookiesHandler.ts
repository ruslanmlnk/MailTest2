import formsStore from "@/store/formsStore";
import Cookies from "js-cookie";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

export const useUtmCookiesHandler = (query: ParsedUrlQuery): void => {
	useEffect(() => {
		addUtmCookies(query);
		formsStore.saveUtmValues(query);
	}, [query]);

	useEffect(() => {
		window.addEventListener('beforeunload', (e) => {
			updateUtmCookiesExpires(5);

			return undefined;
		});
	}, []);
}

const updateUtmCookiesExpires = (expiresMinutes: number): void => {
	const utmCookiesList = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

	const expiresTime = new Date(new Date().getTime() + expiresMinutes * 60 * 1000);

	utmCookiesList.forEach((cookie) => {
		if(Cookies.get(cookie) != 'undefined') {
			Cookies.set(cookie, Cookies.get(cookie) as string, {
				expires: expiresTime,
				domain: '.starvanlinesmovers.com'
			});
		} else {
			Cookies.remove(cookie);
		}
	})
};

const addUtmCookies = (query: ParsedUrlQuery): void => {
	for (const key in query) {
		const value = query[key];

		if (key.includes('utm')) {
			try {
				Cookies.set(key, value as string, { domain: '.starvanlinesmovers.com' });
			} catch (error) {
				console.error('Failed to set cookie:', error);
			}
		}
	}
};