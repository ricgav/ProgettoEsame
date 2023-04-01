export interface UserInfoI {
  nome: string;
  cognome: string;
  image: string;
  email: string;
  address: string;
  isSeller: boolean;
}

const user: UserInfoI = {
  nome: "Alice",
  cognome: "Corvetto",
  image: "alice.jpg",
  email: "test@test.com",
  address: "Piazza la bomba 4",
  isSeller: true
}

export const utenti: { [username: string]: UserInfoI} = {
  User: user,
};
