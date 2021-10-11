import { User } from "types";

import { jsonplaceholderClient } from "./common";
import { validateFormatAxiosResponse } from "apis/utils";
import { getAllUsersSchema } from "schemas";

export const getAllUsers = async (): Promise<Array<User>> =>
  jsonplaceholderClient
    .get<Array<User>>("/users")
    .then(validateFormatAxiosResponse(getAllUsersSchema()));
