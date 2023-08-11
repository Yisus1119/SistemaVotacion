export enum ResponseStatus {
	OK,
	ERROR,
}

export enum ResponseErrors {
	NOT_ERROR,
	INCORRECT_DATA,
	NOT_FOUND,
}

export interface IResponse {
	data: unknown | null;
	status: ResponseStatus;
	error: ResponseErrors;
}
