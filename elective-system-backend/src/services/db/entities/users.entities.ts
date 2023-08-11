import { Entities } from "../interfaces";

const users: UserData[] = [
	{ name: "jesusa", dni: "232114521", age: 18, password: "1234" },
	{ name: "diego", dni: "565232423", age: 18, password: "abcd" },
];

export const UserEntitie: Entities = {
	data: users,
};
