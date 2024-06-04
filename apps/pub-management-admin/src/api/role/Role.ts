import { User } from "../user/User";

export type Role = {
  admin: boolean | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
