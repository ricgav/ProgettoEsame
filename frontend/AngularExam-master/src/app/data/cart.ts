export interface CartInfoI {
  cart: string;
}

let orders: CartInfoI[] = [];


export const ordini: { [username: string]: CartInfoI[]} = {
  User: orders,
};


