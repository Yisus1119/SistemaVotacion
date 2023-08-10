interface UserData {
	name: string;
	age: number;
	dni: string;
	password: string;
}

interface UserDataWithoutPass extends Omit<UserData, "password"> {}

interface UserDataRead {
	name: string;
}
