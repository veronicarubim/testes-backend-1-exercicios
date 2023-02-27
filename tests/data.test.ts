import {formatDate} from "../src/exercicio2"

describe("formatDate", () => {

  test("A entrada deve ser no formato 'aaaa/mm/dd'. A saída deve ser uma data no formato 'dd/mm/aaaa'.", () => {
        const result = formatDate("1997/11/26")
        expect(result).toBe("26/11/1997")
    })

})