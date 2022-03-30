import {IGetCheckoutCounterDTO} from "./GetCheckoutCounterDTO"

export class GetCheckoutCounterUseCase {
  constructor() {}

  async execute(data: IGetCheckoutCounterDTO) {
    const exchange = data.moneyProvided - data.purchaseValue
    const moneyResult = this.converter(exchange)

    return {
      parameters: {...data, change: exchange},
      moneyResult: moneyResult
    }
  }

  converter = (value: number): Array<Object> => {
    var tempValue = value
    const cedules:any = [100, 10, 1]

    cedules.forEach((cedule:number, index:number) => {
      cedules[index] = { [cedule] : Math.floor(tempValue/cedule)}
      tempValue %= cedule
    })

    return cedules
  }
}