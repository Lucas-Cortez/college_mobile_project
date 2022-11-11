import { Id } from "./Id";

export type User = Id & {
  name: string;
  email: string;
  password: string;
  purchases: Purchases[];
};

export type Purchases = Id & {
  amount: number;
  data: Date;
  value: number;
};
