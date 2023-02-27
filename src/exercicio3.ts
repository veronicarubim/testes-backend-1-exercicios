export interface User {
    name: string;
    email: string;
    age: number;
  }
  
 export const userList: User[] = [
    { name: "Astrodev", email: "astro@dev.com", age: 35 },
    { name: "Maria", email: "maria@dev.com", age: 28 },
    { name: "João", email: "joao@dev.com", age: 42 },
  ];