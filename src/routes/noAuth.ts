import { response, Router } from "express"
import { getCEPsController } from "../useCases/getCEPs"
import { getCheckoutCounterController } from "../useCases/getCheckoutCounter"
import { getPalindromeController } from "../useCases/getPalindrome"
import { setNewVehicleController } from "../useCases/setNewVehicle"

const noAuth = Router()

noAuth.get("/palindrome", (request, response) => {
  return getPalindromeController.handle(request, response)
})

noAuth.get("/checkoutCounter", (request, response) => {
  return getCheckoutCounterController.handle(request, response)
})

noAuth.post("/newVehicle", (request, response) => {
  return setNewVehicleController.handle(request, response)
})

noAuth.post("/ceps", (request, response) => {
  return getCEPsController.handle(request, response)
})

export {noAuth}