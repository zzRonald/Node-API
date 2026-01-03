import { Router, type Request, type Response } from "express" 
import { z } from "zod"
import { is } from "zod/locales"

interface ISignupRequest {
    email: string  
    password: string
}

const users: ISignupRequest[] = []
const schemaSignUpRequestBody = z.object ({
    email: z.email("Email inválido"),
    password: z.string("Senha inválida")
    .min(6, "A senha deve ter no mínimo 6 caracteres")
})


 export const mainroute = Router () 

    mainroute.post("/sign-up", (request: Request, response: Response)=> {
try {

const { email, password } = schemaSignUpRequestBody.parse(request.body)
    const usersExists = users.find(item => item.email == email)


    if(usersExists) {
        return response.status(409).send({ message: "Usuarios já cadastrado" })
    }   


users.push({ email, password })


    return response.status(201).send({ users })
    
    } catch (error) {
        if(error instanceof z.ZodError) {
            return response.status(400).send({
                 message: "Validation error",
                  issues: error.format() })
        }
        
        return response.status(500).send({ message: "Internal server error" })
   }
}) 
