export class InvalidMoneyValueError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'InvalidMoneyValueError'
  }
}