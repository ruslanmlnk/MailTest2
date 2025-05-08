//! Kill yourself Kill yourself Kill yourself Kill yourself Kill yourself Kill yourself Kill yourself Kill yourself
import { autorun, makeAutoObservable } from "mobx";
import { ParsedUrlQuery } from "querystring";

import calculatorStore, { IInventoryItem } from "./calculatorStore";
import mapStore from "./mapStore";
// other mobx
import popupsStore from "./popupsStore";

// interfaces
export interface IRequestFormData {
	ClientName: string;
	PhoneNumber: string;
	EmailAddress: string;
	ZipFrom: string;
	ZipTo: string;
}

export interface IGetAQuoteData {
	ClientName: string;
	PhoneNumber: string;
	EmailAddress: string;
	ZipFrom?: string;
	ZipTo?: string;
}

export interface IChecklistData {
	PhoneNumber: string;
	EmailAddress: string;
}

export interface IContactRequestData {
	ClientName: string;
	PhoneNumber: string;
	EmailAddress: string;
	Comment: string;
}

const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];

interface ICalculatorData {
	uniquekey: string;
	firstname: string;
	email: string;
	phone1: string;
	fromzip: number;
	tozip: number;
	movedate: string;
	movetime: string;
	movesize: number;
	distance: number;
	clientInventory: IInventoryItem[];
	remarks: string;
	extras: string;
}

class FormsStore {
	mapStore: any;
	toggleGetAQuotePopup() {
		throw new Error("Method not implemented.");
	}
	RequestFormData: IRequestFormData;
	GetAQuoteData: IGetAQuoteData;
	PreCalculatorData: IGetAQuoteData;
	CalculatorData: ICalculatorData;
	ChecklistData: IChecklistData;
	ContactRequestData: IContactRequestData;

	loadingRequest: boolean;

	utmValues: Record<string, string> = {};

	saveUtmValues(query: ParsedUrlQuery) {
		for (const key in query) {
			const value = query[key];
			if (key.includes("utm")) {
				this.utmValues[key] = value as string;
			}
		}
	}
	extras = {
		packaging: false,
		storage: false,
	};

	constructor() {
		this.RequestFormData = {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
			ZipFrom: "",
			ZipTo: "",
		};
		this.GetAQuoteData = {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
			ZipFrom: "",
			ZipTo: "",
		};
		this.PreCalculatorData = {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
			ZipFrom: "",
			ZipTo: "",
		};
		this.CalculatorData = {
			uniquekey: "WE-7138",
			firstname: "-",
			email: "-",
			phone1: "+1 (",
			fromzip: parseInt(mapStore.postcodes[0]),
			tozip: parseInt(mapStore.postcodes[1]),
			movedate: formattedDate,
			movetime: "10:00",
			movesize: calculatorStore.currentCubicFeet,
			distance: mapStore.distance,
			clientInventory: calculatorStore.clientInventory,
			remarks: "",
			extras: "",
		};
		this.ChecklistData = {
			PhoneNumber: "+1 (",
			EmailAddress: "",
		};
		this.ContactRequestData = {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
			Comment: "",
		};

		this.loadingRequest = false;
		makeAutoObservable(this);
	}

	async sendToGranot(movingData: Record<string, string>) {
		try {
			const response = await fetch(
				"https://lead.hellomoving.com/LEADSGWHTTP.lidgw?&API_ID=25D0627ABEFF&MOVERREF=justin@starvanlinesmovers.com",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(movingData).toString(),
				},
			);

			if (response.ok) {
				console.log("Successfully sent data to Granot");
			} else {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
		} catch (error) {
			console.error("Error sending data to Granot:", error);
		}
	}

	async sendQuote(
		apiInput: string,
		resObjectBody:
			| IRequestFormData
			| IGetAQuoteData
			| ICalculatorData
			| IChecklistData
			| IContactRequestData,
		formId: string | undefined,
		args: React.FormEvent<HTMLFormElement> | undefined,
	) {
		args && args.preventDefault();
		this.loadingRequest = true;

		setTimeout(() => {
			popupsStore.requestCompletePopup = true;
			this.loadingRequest = false;
			formId &&
				document
					.querySelectorAll<HTMLFormElement>(`#${formId}`)
					.forEach((item) => item.reset());
		}, 1000);

		const resObject: RequestInit = {
			method: "POST",
			body: JSON.stringify(resObjectBody),
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		};

		return await fetch(apiInput, resObject)
			.then(async (response) => {
				if (response.ok) {
					if (
						(formsStore.CalculatorData.fromzip == 90012 &&
							formsStore.CalculatorData.tozip == 10007) ||
						(formsStore.CalculatorData.fromzip == 10007 &&
							formsStore.CalculatorData.tozip == 90012)
					) {
						formsStore.CalculatorData.fromzip = 0;
						formsStore.CalculatorData.tozip = 0;
					}

					const getReferralSource = () => {
						if (formsStore.utmValues["utm_campaign"]) {
							return "Website Paid Lead";
						} else {
							return "Website SEO Lead";
						}
					};

					const postData = {
						fullName: formsStore.CalculatorData.firstname,
						email: formsStore.CalculatorData.email,
						phoneNumber: formsStore.CalculatorData.phone1,
						originZip:
							formsStore.CalculatorData.fromzip == 0
								? ""
								: formsStore.CalculatorData.fromzip,
						destinationZip:
							formsStore.CalculatorData.tozip == 0
								? ""
								: formsStore.CalculatorData.tozip,
						moveDate: formsStore.CalculatorData.movedate,
						moveSize: formsStore.CalculatorData.movesize,
						notes: JSON.stringify(formsStore.utmValues),
						ReferralSource: getReferralSource(),
						Inventory: calculatorStore.clientInventory
							.map(
								(item, i) =>
									`${i + 1}. ${item.item.itemName}; Quantity: ${
										item.quantity
									}; Volume: ${item.cubicFeet};`,
							)
							.join("\n"),
					};

					const movingPostData: Record<string, string> = {
						firstname: formsStore.CalculatorData.firstname,
						email: formsStore.CalculatorData.email,
						phone1: formsStore.CalculatorData.phone1,
						ozip:
							formsStore.CalculatorData.fromzip == 0
								? ""
								: formsStore.CalculatorData.fromzip.toString(),
						dzip:
							formsStore.CalculatorData.tozip == 0
								? ""
								: formsStore.CalculatorData.tozip.toString(),
						movedte: formsStore.CalculatorData.movedate,
						movesize: formsStore.CalculatorData.movesize.toString(),
						notes: JSON.stringify(formsStore.utmValues),
						label: getReferralSource(),
						// Inventory: calculatorStore.clientInventory
						// 	.map(
						// 		(item, i) =>
						// 			`${i + 1}. ${item.item.itemName}; Quantity: ${
						// 				item.quantity
						// 			}; Volume: ${item.cubicFeet};`,
						// 	)
						// 	.join("\n"),
					};
					this.sendToGranot(movingPostData);

					// await fetch(
					// 	"https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=fde01635-b7c6-4008-aca2-b06d012eb011",
					// 	{
					// 		method: "POST",
					// 		headers: {
					// 			"Content-Type": "application/json",
					// 		},
					// 		body: JSON.stringify(postData),
					// 	},
					// );
					this.clearFormData();
				} else {
					popupsStore.toastAlert(
						"error",
						"An error occurred while processing the request! Try again.",
						10000,
					);
				}
			})
			.catch(() => {});
	}

	async quietSendQuote(
		apiInput: string,
		resObjectBody:
			| IRequestFormData
			| IGetAQuoteData
			| ICalculatorData
			| IChecklistData
			| IContactRequestData,
		args: React.FormEvent<HTMLFormElement> | undefined,
	) {
		args && args.preventDefault();
		const resObject: RequestInit = {
			method: "POST",
			body: JSON.stringify(resObjectBody),
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		};

		return await fetch(apiInput, resObject).then(async (response) => {
			if (response.ok) {
				if (
					(formsStore.CalculatorData.fromzip == 90012 &&
						formsStore.CalculatorData.tozip == 10007) ||
					(formsStore.CalculatorData.fromzip == 10007 &&
						formsStore.CalculatorData.tozip == 90012)
				) {
					formsStore.CalculatorData.fromzip = 0;
					formsStore.CalculatorData.tozip = 0;
				}

				const getReferralSource = () => {
					if (formsStore.utmValues["utm_campaign"]) {
						return "Website Paid Lead";
					} else {
						return "Website SEO Lead";
					}
				};

				const postData = {
					fullName: formsStore.CalculatorData.firstname,
					email: formsStore.CalculatorData.email,
					phoneNumber: formsStore.CalculatorData.phone1,
					originZip:
						formsStore.CalculatorData.fromzip == 0
							? ""
							: formsStore.CalculatorData.fromzip,
					destinationZip:
						formsStore.CalculatorData.tozip == 0
							? ""
							: formsStore.CalculatorData.tozip,
					moveDate: formsStore.CalculatorData.movedate,
					moveSize: formsStore.CalculatorData.movesize,
					notes: JSON.stringify(formsStore.utmValues),
					ReferralSource: getReferralSource(),
				};

				await fetch(
					"https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=fde01635-b7c6-4008-aca2-b06d012eb011",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(postData),
					},
				);
			}
		});
	}

	clearFormData() {
		this.RequestFormData = this.getDefaultRequestFormData();
		this.GetAQuoteData = this.getDefaultGetAQuoteData();
		this.PreCalculatorData = this.getDefaultPreCalculatorData();
		this.CalculatorData = this.getDefaultCalculatorData();
		this.ChecklistData = this.getDefaultChecklistData();
		this.ContactRequestData = this.getDefaultContactRequestData();
	}
	getDefaultRequestFormData() {
		return {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
			ZipFrom: "",
			ZipTo: "",
		};
	}
	getDefaultGetAQuoteData() {
		return {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
		};
	}

	getDefaultPreCalculatorData() {
		return {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
		};
	}
	getDefaultCalculatorData() {
		return {
			uniquekey: "WE-7138",
			firstname: "-",
			email: "-",
			phone1: "",
			fromzip: parseInt(mapStore.postcodes[0]),
			tozip: parseInt(mapStore.postcodes[1]),
			movedate: "2023-01-01",
			movetime: "10:00",
			movesize: calculatorStore.currentCubicFeet,
			distance: mapStore.distance,
			clientInventory: calculatorStore.clientInventory,
			remarks: "",
			extras: "",
		};
	}
	getDefaultChecklistData() {
		return {
			PhoneNumber: "+1 (",
			EmailAddress: "",
		};
	}

	getDefaultContactRequestData() {
		return {
			ClientName: "",
			PhoneNumber: "+1 (",
			EmailAddress: "",
			Comment: "",
		};
	}
}

const formsStore = new FormsStore();

autorun(() => {
	const json = JSON.stringify(calculatorStore);
	formsStore.CalculatorData.movesize = calculatorStore.currentCubicFeet;
	formsStore.CalculatorData.distance = mapStore.distance;
	formsStore.CalculatorData.clientInventory = calculatorStore.clientInventory;
});

export default formsStore;
