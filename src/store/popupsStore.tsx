import { makeAutoObservable } from 'mobx';
import { toast } from 'react-toastify';

interface IToastAlert {
	(type: 'error' | 'success', text: string, time: number): void;
}

class PopupsStore {
	requestCompletePopup: boolean;

	constructor() {
		this.requestCompletePopup = false;
		makeAutoObservable(this);
	}

	toastAlert: IToastAlert = (type, text, time) => {
		let params: any = {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: time,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
		};

		toast.dismiss();

		type == 'error' && toast.error(text, params);
		type == 'success' && toast.success(text, params);
	};
}

const popupsStore = new PopupsStore();

export default popupsStore;
