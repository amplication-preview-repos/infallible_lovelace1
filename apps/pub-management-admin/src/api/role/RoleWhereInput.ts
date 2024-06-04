import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  admin?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
