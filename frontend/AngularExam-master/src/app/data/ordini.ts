export interface OrderInfoI {
  orderID: String;
  nomeProdotto: string;
  size: string;
  price: string;
}

const order: OrderInfoI = {
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
}


export const ordini: { [username: string]: OrderInfoI} = {
  Alice: order,

  //bisogna modifcare backend in modo che faccia filtro
  // degli ordini di utente e componga un solo json con tutti gli oridni
};

