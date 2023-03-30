export interface ProductInfoI {
  id: string;
  nomeProdotto: string;
  descrizioneProdotto: string;
  price: string;
  image: string;
  type: string;
}

let products: ProductInfoI[] = [];

const product: ProductInfoI = {
  id : "1",
  nomeProdotto: "Maglione bello Primark",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "€ 9,99",
  image: "assets/maglione.png",
  type: "maglione"
}

const product1: ProductInfoI = {
  id : "2",
  nomeProdotto: "Maglione dello zio",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "€ 999,99",
  image: "assets/maglione2.png",
  type: "maglione"
}

const product2: ProductInfoI = {
  id : "3",
  nomeProdotto: "Pantalone Owens",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "€ 399,99",
  image: "assets/pants.jpeg",
  type: "pantalone"
}

const product3: ProductInfoI = {
  id : "3",
  nomeProdotto: "Tshirt British",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "€ 19,99",
  image: "assets/tshirt.png",
  type: "tshirt"
}

const product4: ProductInfoI = {
  id : "3",
  nomeProdotto: "Scarpe Munich",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "€ 19,99",
  image: "assets/scarpe.jpg",
  type: "scarpa"
}

products.push(product);
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);



export const prodotti: { [product: string]: ProductInfoI[]} = {
  User: products,
};

