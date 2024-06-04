import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  admin?: boolean | null;
  name?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
