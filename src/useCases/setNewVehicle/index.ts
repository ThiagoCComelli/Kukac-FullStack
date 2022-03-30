import { SetNewVehicleController } from "./SetNewVehicleController";
import { SetNewVehicleUseCase } from "./SetNewVehicle";

const setNewVehicleUseCase = new SetNewVehicleUseCase()

const setNewVehicleController = new SetNewVehicleController(
  setNewVehicleUseCase
)

export { setNewVehicleController }