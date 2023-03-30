export interface UserInfoI {
  nome: string;
  cognome: string;
  image: string;
  email: string;
  address: string;
}

const alice: UserInfoI = {
  nome: "Alice",
  cognome: "Corvetto",
  image: "alice.jpg",
  email: "test@test.com",
  address: "Piazza la bomba 4",
}

export const utenti: { [username: string]: UserInfoI} = {
  Alice: alice,
};
