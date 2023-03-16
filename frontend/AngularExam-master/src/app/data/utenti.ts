export interface UserInfoI {
  nome: string;
  cognome: string;
  image: string;
  descrizione: string;
  citazione: string;
  autore: string;
}

const alice: UserInfoI = {
  nome: "Alice",
  cognome: "Corvetto",
  image: "alice.jpeg",
  descrizione: `<p>Mi chiamo Alice perché mia mamma è sempre stata un'appassionata di Lewis Carroll e del suo <em>Alice nel paese delle
meraviglie</em>. Sono nata nel 1978 a Ivrea e mi sono laureata nel 2002 in Scienze dell'Educazione.
<p>Lavoro nel <strong>negozio di fiori</strong> dei miei genitori, che ho trasformato aggiungendo un piccolo angolo
  bar e lettura.</p>
<p>Ho due gatti, <em>Sting</em> e <em>Bowie</em>.</p>`,
  citazione: "I fiori della primavera sono i sogni dell’inverno raccontati, la mattina, al tavolo degli angeli",
  autore: "Khalil Gibran"
}

const matteo: UserInfoI = {
  nome: "Matteo",
  cognome: "De Angeli",
  image: "matteo.jpeg",
  descrizione: `<p>Sono nato il 15 ottobre del 1982 a Torino, dove mi sono successivamente laureato in Informatica. </p>
<p>Lavoro come free-lance sviluppando applicazioni Web per diverse aziende del territorio. Preferisco un lavoro
    autonomo perché nel tempo libero amo coltivare una grande passione: la fotografia. </p>
<p>Mi piace particolarmente fotografare paesaggi urbani. Recentemente ho iniziato a combinare la fotografia con
    tecniche pittoriche, e ho un piccolo laboratorio dove realizzo le mie creazioni, fra stampanti laser e colori
    acrilici.</p>`,
  citazione: "Se questa scienza che grandi vantaggi porterà all'uomo, non servirà all'uomo per comprendere se" +
    " stesso, finirà per rigirarsi contro l'uomo.",
  autore: "Giordano Bruno"
}

const celia: UserInfoI = {
  nome: "Celia",
  cognome: "Gioia",
  image: "celia.jpeg",
  descrizione: `<p>Mi sono trasferita a Milano da Monopoli, dove sono nata, nel 1995, per studiare design di moda.</p>
<p>Qui ho scoperto il mondo della grafica pubblicitaria e in particolare del web design, il campo in cui lavoro
    adesso... per un'azienda di moda! Così sono riuscita a riunire i miei interessi.</p>
<p>Nel tempo libero mi piace molto cucinare, gli amici apprezzano i miei piatti, dicono che sono buoni e belli...
    data la mia professione, come potrei non curarne l'aspetto?</p>`,
  citazione: "God made food; the devil the cooks.",
  autore: "James Joyce"
}

export const utenti: { [username: string]: UserInfoI} = {
  Alice: alice,
  Matteo: matteo,
  Celia: celia
};
