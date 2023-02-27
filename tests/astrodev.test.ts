import {userList} from "../src/exercicio3"

describe("astrodev", () => {

    test("Astrodev is in the user list", () => {
        const astrodev = { name: "Astrodev", email: "astro@dev.com", age: 35 };
        expect(userList).toContainEqual(astrodev);
      });

})

/* o método toContainEqual() é usado para verificar se o objeto astrodev está na lista de usuários. */
