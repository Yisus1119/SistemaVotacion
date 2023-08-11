import { UserEntitie } from "./entities/users.entities";
import { DB_ENTITIES, Entities } from "./interfaces";

export function getModelDb(key: DB_ENTITIES): Entities {
	switch (key) {
		case DB_ENTITIES.USERS:
			return UserEntitie;

		default:
			return UserEntitie;
	}
}
