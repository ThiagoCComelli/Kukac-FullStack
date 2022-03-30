import { IVehicle } from "./Vehicle"

export class Car implements IVehicle {
  brand!: string
  model!: string
  year!: number
  doors!: number

  constructor (params: IVehicle) {
    Object.assign(this, params)
  }

  checkValidVehicle = (): boolean => {
    if (this.doors < 2 || this.doors > 4) return false
    return true
  }
}