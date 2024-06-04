import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
