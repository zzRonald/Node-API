import { Router } from "express" 

import { signUpController } from "../controllers/sign-up-controller.js"

 export const mainroute = Router()

mainroute.post("/sign-up", (request, response) => signUpController(request, response)) 
