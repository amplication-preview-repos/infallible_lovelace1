import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
