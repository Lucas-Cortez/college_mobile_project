import { Id } from "./Id";

export type Farmer = Id & {
  name: string;
  nickname: string;
  city: string;
  state: string;
  products: Product[];
};

export type Product = Id & {
  name: string;
  kgPortion: number;
  value: number;
};
