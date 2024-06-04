import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  admin?: boolean | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
