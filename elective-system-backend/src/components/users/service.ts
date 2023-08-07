import { getUserModel } from "./model";

export const getUserService = (name: string) => {
	return getUserModel(name);
};
