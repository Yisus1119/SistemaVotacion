import { Response } from "express";
import { IResponse, ResponseErrors, ResponseStatus } from "./interface";

const status = {
	[ResponseStatus.ERROR]: "error",
	[ResponseStatus.OK]: "ok",
};

const errors = {
	[ResponseErrors.INCORRECT_DATA]: "incorrect requested dni",
	[ResponseErrors.NOT_FOUND]: "user not exist",
	[ResponseErrors.NOT_ERROR]: "",
};

export const resExec = (response: IResponse, res: Response) => {
	res.send({
		data: response.data,
		status: status[response.status],
		error: errors[response.error],
	});
};
