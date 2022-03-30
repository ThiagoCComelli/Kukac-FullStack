export class InvalidVehicleConfig extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'InvalidVehicleConfig'
  }
}