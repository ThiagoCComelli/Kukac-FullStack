import { GetCheckoutCounterController } from "./GetCheckoutCounterController";
import { GetCheckoutCounterUseCase } from "./GetCheckoutCounter";

const getCheckoutCounterUseCase = new GetCheckoutCounterUseCase()

const getCheckoutCounterController = new GetCheckoutCounterController(
  getCheckoutCounterUseCase
)

export { getCheckoutCounterController }