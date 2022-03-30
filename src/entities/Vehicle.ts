
export interface IVehicle {
  brand: string
  model: string
  year: number
  doors: number

  // tires?: number
  // passengers?: number

  checkValidVehicle: () => boolean
}