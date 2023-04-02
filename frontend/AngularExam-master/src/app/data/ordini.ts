export interface OrderInfoI {
  id: number;
  userId : number;
  date: number;
  price: number;
  productsId: number[]
}


let orders: OrderInfoI[] = [];

/* const order: OrderInfoI = {
  orderID : "234354",
  nomeProdotto: "Maglione bello Primark",
  size: "L",
  price: "€ 9,99"
}

const order1: OrderInfoI = {
  orderID : "232343",
  nomeProdotto: "pantalone bello Primark",
  size: "L",
  price: "€ 19,99"
} */

//orders.push(order);
//orders.push(order1);

export const ordini: { [username: string]: OrderInfoI[]} = {
  User: orders,
  //bisogna modifcare backend in modo che faccia filtro
  // degli ordini di utente e componga un solo json con tutti gli oridni
};


