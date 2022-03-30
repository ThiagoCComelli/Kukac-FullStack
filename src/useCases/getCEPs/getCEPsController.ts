import { Request, Response } from "express";
import { GetCEPsUseCase } from "./getCEPs";

export class GetCEPsController {
  constructor (
    private getCEPsUseCase: GetCEPsUseCase
  ) {}

  handle = async (request: Request, response: Response) => {
    try {
      const cepsVerified = await this.getCEPsUseCase.execute(request.body)

      return response.status(200).send({
        cepsVerified: cepsVerified
      })
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected Error."
      })
    }
  }
}