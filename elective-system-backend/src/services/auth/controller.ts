import { Request, Response } from "express";
import { resExec } from "../../utils/response/response.util";
import { authenticateService } from "./auth.service";
import { ResponseErrors, ResponseStatus } from "../../utils/response/interface";

export const postAuthenticateController = (req: Request, res: Response) => {
	try {
		const { dni }: Pick<UserData, "dni"> = req.body;

		if (dni.length <= 0) throw ResponseErrors.INCORRECT_DATA;

		const info = authenticateService(dni);
		if (!info.status) throw ResponseErrors.NOT_FOUND;

		resExec(
			{
				data: info.data,
				status: ResponseStatus.OK,
				error: ResponseErrors.NOT_ERROR,
			},
			res
		);
	} catch (error) {
		resExec(
			{
				data: null,
				status: ResponseStatus.ERROR,
				error: (error as Error).message
					? ResponseErrors.INCORRECT_DATA
					: (error as ResponseErrors),
			},
			res
		);
	}
};
