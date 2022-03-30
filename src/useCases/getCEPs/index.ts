import { GetCEPsController } from "./getCEPsController";
import { GetCEPsUseCase } from "./getCEPs";

const getCEPsUseCase = new GetCEPsUseCase()

const getCEPsController = new GetCEPsController(
  getCEPsUseCase
) 

export { getCEPsController }