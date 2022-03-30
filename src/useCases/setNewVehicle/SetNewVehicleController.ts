import { Request, Response } from "express"
import { Car } from "../../entities/Car"
import { Motorcycle } from "../../entities/Motorcycle"
import { IVehicle } from "../../entities/Vehicle"
import { InvalidVehicleConfig } from "../../errors/invalid-vehicle-config"
import { SetNewVehicleUseCase } from "./SetNewVehicle"

export class SetNewVehicleController {
  constructor (
    private setNewVehicleUseCase: SetNewVehicleUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      var saveResult

      const vehicle: IVehicle = request.body.type === "car" ? 
          new Car(request.body) : 
          new Motorcycle(request.body)

      if (vehicle.checkValidVehicle()) {
        saveResult = await this.setNewVehicleUseCase.execute(vehicle)
      } else {
        throw new InvalidVehicleConfig("Invalid vehicle configuration, follow the correct rules")
      }

      return response.status(200).json({
        fileSaved: saveResult,
        vehicle: vehicle
      })
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected Error."
      })
    }
  }
}