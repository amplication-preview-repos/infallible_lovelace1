import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
