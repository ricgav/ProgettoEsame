export interface ProductInfoI {
  id: string;
  nomeProdotto: string;
  descrizioneProdotto: string;
  price: string;
  image: string;
  type: string;
  size: string;
}

let products: ProductInfoI[] = [];

const product: ProductInfoI = {
  id : "0",
  nomeProdotto: "Maglione bello Primark",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "9,99",
  image: "assets/maglione.png",
  type: "maglione",
  size: ""
}

const product1: ProductInfoI = {
  id : "1",
  nomeProdotto: "Maglione dello zio",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "999,99",
  image: "assets/maglione2.png",
  type: "maglione",
  size: ""
}

const product2: ProductInfoI = {
  id : "2",
  nomeProdotto: "Pantalone Owens",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "399,99",
  image: "assets/pants.jpeg",
  type: "pantalone",
  size: ""
}

const product3: ProductInfoI = {
  id : "3",
  nomeProdotto: "Tshirt British",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "19,99",
  image: "assets/tshirt.png",
  type: "tshirt",
  size: ""
}

const product4: ProductInfoI = {
  id : "4",
  nomeProdotto: "Scarpe Munich",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "19,99",
  image: "assets/scarpe.jpg",
  type: "scarpa",
  size: ""
}

const product5: ProductInfoI = {
  id : "5",
  nomeProdotto: "Tshirt Orange",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "119,99",
  image: "assets/tshirt3.png",
  type: "tshirt",
  size: ""
}

const product6: ProductInfoI = {
  id : "6",
  nomeProdotto: "Tshirt Navy",
  descrizioneProdotto: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: "89,99",
  image: "assets/tshirt2.png",
  type: "tshirt",
  size: ""
}

products.push(product, product1, product2, product3, product4, product5, product6);

export {products};

