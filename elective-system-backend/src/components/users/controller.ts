import { Request, Response } from "express";
import { getUserService } from "./service";

export function getUserController(req: Request, res: Response) {
	const { name } = req.params;

	if (name.length < 1) {
		return res.send("Error");
	}

	const user = getUserService(name);

	if (user == null) {
		res.send("Not exist");
	}

	res.json(user);
}
