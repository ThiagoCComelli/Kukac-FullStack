import { Request, Response } from "express";
import { InvalidRangeError } from "../../errors/invalid-range-error";
import { GetPalindromeUseCase } from "./GetPalindrome"

export class GetPalindromeController {
  constructor (
    private getPalindromeUseCase: GetPalindromeUseCase 
  ) {}

  async handle(request: Request, response: Response) {
    try {

      const startAt: number = parseInt(request.query.startAt as string)
      const endAt: number = parseInt(request.query.endAt as string)

      if (isNaN(startAt) || isNaN(endAt)) {
        throw new InvalidRangeError("Invalid range, You need to provide startAt:int and endAt:int parameters")
      }

      if (startAt < 0) {
        throw new InvalidRangeError("Invalid range, initial range need to be grater than -1")
      } else if (startAt > endAt) {
        throw new InvalidRangeError("Invalid range, endAt range need to be grater than startAt")
      }

      const allPalindromes = await this.getPalindromeUseCase.execute({
        startAt: startAt,
        endAt: endAt
      })

      return response.status(200).json(allPalindromes)
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}