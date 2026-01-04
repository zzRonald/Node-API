import type { Request, Response } from "express"
import { z, ZodError } from "zod"
import { prisma } from "../lib/prisma/generated/prisma/prisma.js"


interface ISignupRequest {
    email: string  
    password: string
}

const schemaSignUpRequestBody = z.object ({
    email: z.email("Email inválido"),
    password: z.string("Senha inválida")
    .min(6, "A senha deve ter no mínimo 6 caracteres")
})


export async function signUpController(
    request: Request,
    response: Response,
) {
    try {

const { email, password } = schemaSignUpRequestBody.parse(request.body)


    const usersExists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(usersExists) {
        return response.status(409).send({ message: "Usuarios já cadastrado" })
    }   


const users = await prisma.user.create({
    data: {
        email,
        password,
    }
})

    return response.status(201).send({ users })
    
    } catch (error) {
        if(error instanceof z.ZodError) {
            return response.status(400).send({
                 message: "Validation error",
                  issues: error.format() })
        }
        
        return response.status(500).send({ message: "Internal server error" })
   }
}