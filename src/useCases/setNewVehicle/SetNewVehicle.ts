import { IVehicle } from "../../entities/Vehicle";
import { v4 as uuidv4 } from 'uuid'
import fs from "fs"

export class SetNewVehicleUseCase {
  constructor() {}

  execute = async (data: IVehicle) => {
    const result = await this.writeFile(data)
    
    return result
  }

  writeFile = async (data: IVehicle) => {
    let data_ = JSON.stringify(data, null, 2)

    const myPromise = await new Promise((resolve, reject) => {
      fs.writeFile(`VehiclesDirectory/${uuidv4()}.json`, data_, (err) => {
        if (err) {
          resolve(false)
        }
        resolve(true)
      })
    })

    return myPromise
  } 

}