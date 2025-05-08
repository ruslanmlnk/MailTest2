import { autorun, makeAutoObservable, reaction } from "mobx";

// interfaces
import { ILatLng } from "../components/map/routing";

export const getUSCities = async () => {
	const res = await fetch(
		"https://svl.sfo3.cdn.digitaloceanspaces.com/USCities.json",
	).then((res) => res.json());

	return res;
};

export interface IPointsData {
	center: ILatLng;
	postcode: string;
	place_name: string;
}

export interface IUSCities {
	zip_code: string;
	latitude: number;
	longitude: number;
	city: string;
	state: string;
	county: string;
}

class MapStore {
	searchedText: string = "";
	foundCities: IUSCities[] = [];
	centers: ILatLng[];
	postcodes: string[];
	distance: number;
	errorMessage: string;

	constructor() {
		this.searchedText = "";
		this.foundCities = [];
		this.centers = [
			{
				lat: 34.053691,
				lng: -118.242766,
			},
			{
				lat: 40.712728,
				lng: -74.006015,
			},
		];
		this.postcodes = ["90012", "10007"];
		this.distance = 0;
		this.errorMessage = "no errors";
		makeAutoObservable(this);
	}

	setDistance(number: number) {
		this.distance = number;
	}

	async searchStatesByText(searchedText: string) {
		const searchText = searchedText.toLowerCase();
		const foundCities: IUSCities[] = [];

		const USCities = await getUSCities();

		//@ts-ignore
		for (const usCity of USCities) {
			const zipCode = String(usCity.zip_code).toLowerCase();
			const city = usCity.city.toLowerCase();

			if (zipCode.indexOf(searchText) === 0 || city.indexOf(searchText) === 0) {
				foundCities.push(usCity);
			} else if (zipCode.includes(searchText) || city.includes(searchText)) {
			}

			if (foundCities.length >= 5) {
				break;
			}
		}

		this.foundCities = foundCities;

		if (foundCities.length === 0) {
			this.foundCities = [];
		}
	}

	async updateCenterByPostcode(postcode: string, centerId: number) {
		const USCities = await getUSCities();

		//@ts-ignore
		USCities.map((usCity: any) => {
			if (usCity.zip_code === postcode) {
				this.centers[centerId] = {
					lat: usCity.latitude,
					lng: usCity.longitude,
				};
			} else
				this.errorMessage =
					"getCenterByPostcode() returns null from postcode" + postcode;
		});
	}

	async updatePostcodeByCenter(center: ILatLng, postcodeId: number) {
		var result: string = "90012";

		const USCities = await getUSCities();

		//@ts-ignore
		USCities.map((usCity: any) => {
			if (usCity.lat === center.lat && usCity.lng === center.lng) {
				result = usCity.postcode;
			} else
				this.errorMessage =
					"getPostcodeByCenters() returns null from center " + center;
		});

		return result;
	}

	updateByPostcodes(postcodes: string[]) {
		this.updateCenterByPostcode(postcodes[0], 0);
		this.updateCenterByPostcode(postcodes[1], 1);

		this.postcodes = postcodes;
	}

	// updateByCenters(centers: ILatLng[]) {
	// 	this.updatePostcodeByCenter(centers[0], 0);
	// 	this.updatePostcodeByCenter(centers[1], 1);

	// 	let newPlaceNames: string[] = [
	// 		this.getPlaceNameByPostcode(this.postcodes[0]),
	// 		this.getPlaceNameByPostcode(this.postcodes[1]),
	// 	];

	// 	this.centers = centers;
	// 	this.placeNames = newPlaceNames;
	// }
	updatePostcodesFromFoundCities() {
		const newPostcodes = this.foundCities.map((item) => item.zip_code);
		this.postcodes = newPostcodes;
	}
}

const mapStore = new MapStore();

autorun(() => {
	const postcodesJSON = JSON.stringify(mapStore.postcodes);

	// if (mapStore.postcodes[0].length == 5 && mapStore.postcodes[1].length == 5)
	// mapStore.updateByPostcodes(mapStore.postcodes);
});

reaction(
	() => mapStore.searchedText,
	(searchedText: string) => {
		if (searchedText) {
			mapStore.searchStatesByText(searchedText);
		} else {
			mapStore.foundCities = [];
		}
	},
);

export default mapStore;
