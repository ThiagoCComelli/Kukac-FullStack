import axios from "axios";
import { IGetCEPsDTO } from "./getCEPsDTO";

export class GetCEPsUseCase {
  constructor() {}

  execute = async (data: IGetCEPsDTO) => {
    let cepsVerified = []

    for(let cep of data.ceps) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        cepsVerified.push(response.data)

      } catch (err: any) {
        return err.message || "Unexpected Error."
      }
    }
    return cepsVerified
  }

  // getCEP = async (cep: string) => {
  //   const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((result) => {

  //     return result.data
  //   })

  //   return response
  // } 
}