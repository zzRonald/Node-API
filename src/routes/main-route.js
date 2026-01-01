import { Router } from "express" 


const users = []
 export const mainroute = Router () 

mainroute.post("/sign-up", (request, response)=> {
    const { email, password } = request.body

    if(!email) {
        return response.status(400).send({ message: "Email é obrigatório" })
    }
    if(!password) {
        return response.status(400).send({ message: "Senha é obrigatória" })
    }
const usersExists = users.find(item => item.email == email)
    if(usersExists) {
        return response.status(409).send({ message: "Usuarios já cadastrado" })
    }   


users.push({ email, password })


    return response.status(201).send({ users })
    
}) 