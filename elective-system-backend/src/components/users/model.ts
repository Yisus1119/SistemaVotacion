import { getModelDb } from "../../services/db/connect.service";
import { DB_ENTITIES } from "../../services/db/interfaces";

const { data } = getModelDb(DB_ENTITIES.USERS);
const users = data as User[];

export function getUserModel(name: string): User | null {
	return users.filter((element) => element.name == name)[0] ?? null;
}
