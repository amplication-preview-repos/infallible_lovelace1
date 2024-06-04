import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
