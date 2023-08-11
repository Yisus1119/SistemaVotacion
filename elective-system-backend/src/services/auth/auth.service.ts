import { getModelDb } from "../db/connect.service";
import { DB_ENTITIES } from "../db/interfaces";

const { data } = getModelDb(DB_ENTITIES.USERS);
const users = data as UserData[];

export const authenticateService = (dni: string): authData => {
	const data = users.filter((e) => e.dni == dni);
	return { data, status: data.length > 0 };
};
