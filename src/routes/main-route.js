import { Router } from "express" 
 export const mainroute = Router () 

 mainroute.get("/test", (request, response)=> {
    return response.status(200).send({ message: "OK"})
})

mainroute.get("/", (request, response)=> {
    return response.status(200).send({ message: "SEJA BEM VINDO!!"})
    
})

mainroute.post("/Login", (request, response)=> {
    const { email, password } = request.body

    return response.status(200).send({ body: { email, password }})
    
}) 