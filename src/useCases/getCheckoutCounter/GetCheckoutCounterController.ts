import { Request, Response } from "express";
import { InvalidMoneyValueError } from "../../errors/invalid-money-value-error";
import { GetCheckoutCounterUseCase } from "./GetCheckoutCounter"

export class GetCheckoutCounterController {
  constructor (
    private getCheckoutCounterUseCase: GetCheckoutCounterUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const purchaseValue = parseInt(request.query.purchaseValue as string)
      const moneyProvided = parseInt(request.query.moneyProvided as string)

      if (isNaN(purchaseValue) || isNaN(moneyProvided)) {
        throw new InvalidMoneyValueError("Invalid values, You need to provide purchaseValue:int and moneyProvided:int parameters")
      }

      if (purchaseValue < 0) {
        throw new InvalidMoneyValueError("Invalid values, purchaseValue need be grater than 0")
      } else if (purchaseValue > moneyProvided) {
        throw new InvalidMoneyValueError("Invalid values, moneyProvided need be grater than purchaseValue")
      }

      const moneyCheckout = await this.getCheckoutCounterUseCase.execute({
        moneyProvided: moneyProvided,
        purchaseValue: purchaseValue
      })

      return response.status(200).json(moneyCheckout)
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}