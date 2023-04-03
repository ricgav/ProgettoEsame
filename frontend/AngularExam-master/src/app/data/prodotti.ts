export interface ProductInfoI {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
  size: string;
}

let products: ProductInfoI[] = [];

const product: ProductInfoI = {
  id : 0,
  name: "Maglione 'Autunno Dorato'",
  description: "Un maglione giallo ocra con una lavorazione a maglia a rombi, ispirato ai colori delle foglie autunnali che cadono dagli alberi.",
  price: 9,
  image: "assets/maglione.png",
  type: "maglione",
  size: ""
}

const product1: ProductInfoI = {
  id : 1,
  name: "Maglione 'Notte Stellata'",
  description: "Un maglione blu notte con un motivo di stelle bianche, realizzato in lana pregiata per garantire un comfort totale nelle lunghe serate d'inverno",
  price: 999,
  image: "assets/maglione2.png",
  type: "maglione",
  size: ""
}

const product2: ProductInfoI = {
  id : 2,
  name: "Pantalone Owens",
  description: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: 399,
  image: "assets/pants.jpeg",
  type: "pantalone",
  size: ""
}

const product3: ProductInfoI = {
  id :3,
  name: "Tshirt British",
  description: "Una t-shirt oversize bianca con una stampa 'progresssive', che ti farà sentire unico e originale, ma forse questo non ti serve.",
  price: 19,
  image: "assets/t-shirt.png",
  type: "tshirt",
  size: ""
}

const product4: ProductInfoI = {
  id : 4,
  name: "Scarpe Munich",
  description: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: 19,
  image: "assets/scarpe.jpg",
  type: "scarpa",
  size: ""
}

const product5: ProductInfoI = {
  id : 5,
  name: "Tshirt Orange",
  description: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: 119,
  image: "assets/tshirt3.png",
  type: "tshirt",
  size: ""
}

const product6: ProductInfoI = {
  id : 6,
  name: "Tshirt Navy",
  description: "Oversized 90s unisex sweater, cozy and chunky knit pullover sweater, alpaca wool sweater, gift for couple, boyfriend gift, fathers day gift",
  price: 89,
  image: "assets/tshirt2.png",
  type: "tshirt",
  size: ""
}

products.push(product, product1, product2, product3, product4, product5, product6);

export {products};

