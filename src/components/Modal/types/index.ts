export interface StarProps {
	fill?: string;
}

export type handleInput = (
	e:
		| React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLTextAreaElement>,
	inptType: String,
) => void;

export type handleFileInput = (e: File) => void;

export interface FormProps {
	closeModal: () => void;
}

export interface Review {
	from: string;
	to: string;
	name: string;
	starsRating: number;
	fileUrl: any;
	commentBody: string;
}
