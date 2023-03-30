export interface ProductInfoI {
  id: string;
  nomeProdotto: string;
  descrizioneProdotto: string;
  price: string;
}

const product: ProductInfoI = {
  id : "234354",
  nomeProdotto: "Maglione bello Primark",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "€ 9,99"
}


export const prodotti: { [product: string]: ProductInfoI} = {
  Maglione: product,
};

