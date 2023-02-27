import {stringToNumber} from "../src/exercicio1"

describe("stringToNumber", () => {
    
    test("A saída deve ser um número e a entrada deve ser uma string", () => {
        const result = stringToNumber("5")
        expect(result).toBe(5)
})
})