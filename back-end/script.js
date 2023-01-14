const express = require("express");
const app = express();
const port = 1234;
const sequelize=require("./sequelize");
require("./modele/User")
app.use(express.json());
app.use("/api",require("../routes/user"))
app.get("/nume",(req,res)=>{
    res.send("Aici vom vedea textul nostru :>");
})
app.listen(port,async()=>{
    console.log("ruuuuuuunnnnn Barry, run to port  "+port);
    try{
        await sequelize.authenticate();
        console.log("MERGE CONEX");
    }
    catch(err){
        console.error("nu a mers :(((( ", error);
    }
})

