const users: User[] = [
	{ name: "jesusa", dni: "232114521" },
	{ name: "diego", dni: "565232423" },
];

export function getUserModel(name: string): User | null {
	return users.filter((element) => element.name == name)[0] ?? null;
}
