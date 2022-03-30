import { app } from "../app";
import request from "supertest"

describe("GET /noAuth/palindrome", () => {
  test("It should return all palindroms in range", async () => {
    const response = await request(app).get("/noAuth/palindrome").query({startAt: 1, endAt: 45})
    expect(response.body).toEqual(
      {
        "parameters": {
            "startAt": 1,
            "endAt": 45
        },
        "allPalindromes": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            11,
            22,
            33,
            44
        ]
      }
    )
  })

  test("It should return all palindroms in range", async () => {
    const response = await request(app).get("/noAuth/palindrome").query({startAt: 123452, endAt: 143456})
    expect(response.body).toEqual(
      {
        "parameters": {
            "startAt": 123452,
            "endAt": 143456
        },
        "allPalindromes": [
            124421,
            125521,
            126621,
            127721,
            128821,
            129921,
            130031,
            131131,
            132231,
            133331,
            134431,
            135531,
            136631,
            137731,
            138831,
            139931,
            140041,
            141141,
            142241,
            143341
        ]
      }
    )
  })
})

describe("GET /noAuth/checkoutCounter", () => {
  test("It should return all infos about exchange", async () => {
    const response = await request(app).get("/noAuth/checkoutCounter").query({moneyProvided: 175, purchaseValue: 14})
    expect(response.body).toEqual({
      "parameters": {
          "moneyProvided": 175,
          "purchaseValue": 14,
          "change": 161
      },
      "moneyResult": [
          {
              "100": 1
          },
          {
              "10": 6
          },
          {
              "1": 1
          }
      ]
    })
  })
})

describe("GET /noAuth/ceps", () => {
  test("It should return all infos about ceps", async () => {
    const response = await request(app).get("/noAuth/ceps").send({
      ceps: [88130485,88130486,88010301,88130480,88130483]
    })
    expect(response.body).toEqual({
      "cepsVerified": [
          {
              "cep": "88130-485",
              "logradouro": "Rua Armando Siegel",
              "complemento": "",
              "bairro": "Ponte do Imaruim",
              "localidade": "Palhoça",
              "uf": "SC",
              "ibge": "4211900",
              "gia": "",
              "ddd": "48",
              "siafi": "8233"
          },
          {
              "cep": "88130-486",
              "logradouro": "Rua Salustiano Pedro dos Passos",
              "complemento": "",
              "bairro": "Ponte do Imaruim",
              "localidade": "Palhoça",
              "uf": "SC",
              "ibge": "4211900",
              "gia": "",
              "ddd": "48",
              "siafi": "8233"
          },
          {
              "cep": "88010-301",
              "logradouro": "Rua Tenente Silveira",
              "complemento": "de 251/252 ao fim",
              "bairro": "Centro",
              "localidade": "Florianópolis",
              "uf": "SC",
              "ibge": "4205407",
              "gia": "",
              "ddd": "48",
              "siafi": "8105"
          },
          {
              "cep": "88130-480",
              "logradouro": "Rua José Salvador Diniz",
              "complemento": "",
              "bairro": "Ponte do Imaruim",
              "localidade": "Palhoça",
              "uf": "SC",
              "ibge": "4211900",
              "gia": "",
              "ddd": "48",
              "siafi": "8233"
          },
          {
              "cep": "88130-483",
              "logradouro": "Servidão Dário Ferreira",
              "complemento": "",
              "bairro": "Ponte do Imaruim",
              "localidade": "Palhoça",
              "uf": "SC",
              "ibge": "4211900",
              "gia": "",
              "ddd": "48",
              "siafi": "8233"
          }
      ]
    })
  })
})
