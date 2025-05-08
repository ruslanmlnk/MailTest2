import { toast } from "react-toastify";

export const onSuccess = (callback: () => void) => {
	return () => {
		callback();
		toast.success("Review sent successfully!", { position: "bottom-right" });
	};
};
export const onError = (error: string) => {
	toast.error(error, { position: "bottom-right" });
};
