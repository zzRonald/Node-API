import express from "express";  
import { mainroute } from "./routes/main-route.js"
    const app = express ();
        app.use(express.json())


            app.use("/", mainroute )
            app.listen(3333, ()=> console.log("Server running."))            