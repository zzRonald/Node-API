import express from "express";  
    const app = express ();
        app.use(express.json())



app.get("/test", (request, response)=> {
    return response.status(200).send({ message: "OK"})
})

app.get("/", (request, response)=> {
    return response.status(200).send({ message: "SEJA BEM VINDO!!"})
    
})
            app.listen(3333, ()=> console.log("Server running."))            