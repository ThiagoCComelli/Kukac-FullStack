# **Desafio Kukac Full-Stack**

### **Inciando o projeto**

No diretorio do projeto, para instalar as dependencias:

`$ npm install`

Para rodar localmente o projeto: `$ yarn start` ou `$ npm start`

A aplicacao ira funcionar na porta 3100, sendo possivel acessar pelo dominio [http://localhost:3100]()

Servidor tambem esta operando e online pela Heroku, sendo acessivel pelo link [https://kukac-fullstack.herokuapp.com]()

### Iniciando os testes unitarios

No mesmo diretorio do projeto, execute: `$ yarn test` ou `$ npm test`

# API endpoints

**Palindromos**
-----------

  Colete todos os palindromos no alcance fornecido.

* **URL**

  /noAuth/palindromelogi
* **Method:**

  GET
* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
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
    ```
* **Error Response:**

  * **Code:** 400
    **Content:**
    ```
    {
        "message": "Missing param: Invalid range, endAt range need to be grater than startAt"
    }
    ```
* **Sample Call:**

  ```javascript
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://kukac-fullstack.herokuapp.com/noAuth/palindrome?startAt=123452&endAt=143456',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  ```


**Cedulas**
-------

  Verifique a quantidade minimas de notas para o seu troco.

* **URL**

  /noAuth/checkoutCounter
* **Method:**

  GET
* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
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
    }
    ```
* **Error Response:**

  * **Code:** 400
    **Content:**
    ```
    {
        "message": "Missing param: Invalid values, moneyProvided need be grater than purchaseValue"
    }
    ```
* **Sample Call:**

  ```javascript
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://kukac-fullstack.herokuapp.com/noAuth/checkoutCounter?moneyProvided=175&purchaseValue=14',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  ```


**Garagem**
-------

Adicione veiculos ao banco de dados da aplicação.

* **URL**

  /noAuth/newVehicle
* **Method:**

  POST
* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
        "fileSaved": true,
        "vehicle": {
            "type": "car",
            "model": "123",
            "brand": "123",
            "year": "1",
            "doors": "2",
            "passengers": "2",
            "tires": "4"
        }
    }
    ```
* **Error Response:**

  * **Code:** 400
    **Content:**
    ```
    {
        "message": "Missing param: Invalid vehicle configuration, follow the correct rules"
    }
    ```
* **Sample Call:**

  ```javascript
  var axios = require('axios');
  var data = JSON.stringify({
    "type": "car",
    "model": "123",
    "brand": "123",
    "year": "1",
    "doors": "2",
    "passengers": "2",
    "tires": "4"
  });

  var config = {
    method: 'post',
    url: 'https://kukac-fullstack.herokuapp.com/noAuth/newVehicle',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  ```


**Consulta CEPs**
-------------

Verifica as informações dos CEPs fornecidos.

* **URL**

  /noAuth/ceps
* **Method:**

  POST
* **Success Response:**

  * **Code:** 200
    **Content:**
    ```
    {
        "cepsVerified": [
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
            }
        ]
    }
    ```
* **Error Response:**

  * **Code:** 400
    **Content:**
    ```
    {
        "message": "Missing param: Invalid vehicle configuration, follow the correct rules"
    }
    ```
* **Sample Call:**

  ```javascript
  var axios = require('axios');
  var data = JSON.stringify({
    "ceps": [
      88130486,
      88130486,
      88130486,
      88130486,
      88130486
    ]
  });

  var config = {
    method: 'post',
    url: 'https://kukac-fullstack.herokuapp.com/noAuth/ceps',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  ```
