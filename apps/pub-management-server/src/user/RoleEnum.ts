import { User } from "./base/User";
import { registerEnumType } from "@nestjs/graphql";

export enum RoleEnum {
    Admin = "Admin",
    User = "User"
}

registerEnumType(RoleEnum, {
    name: "RoleEnum",
  });