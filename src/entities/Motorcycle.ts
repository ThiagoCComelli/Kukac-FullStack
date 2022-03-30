import { IVehicle } from "./Vehicle";

export class Motorcycle implements IVehicle {
  brand!: string
  model!: string
  year!: number
  doors!: number
  tires!: number
  passengers!: number

  constructor (params: IVehicle) {
    Object.assign(this, params)
  }

  checkValidVehicle = (): boolean => {
    if (this.tires !== 2 || this.passengers < 1 || this.passengers > 2) return false
    return true
  }
}