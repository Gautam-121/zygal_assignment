const app = require("./app.js")
const dotenv = require("dotenv")
const path = require("path")
const express = require("express")

process.on("uncaughtException" , (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting Down due to Uncaught Exception error`)

    process.exit(1)
})

//Set environment Configration
dotenv.config({path : "src/config/.env"})

app.use(express.static(path.join(__dirname , "../../frotend/build")))

app.get("*" , function(req , res){
    res.sendFile(path.join(__dirname , "../../frotend/build/index.html"))
})

const server =  app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Listening On Port ${process.env.PORT || 3000}`)
})

process.on("unhandledRejection", (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting Down due to Unhandled Promised Rejection`)

    server.close(()=>{
        process.exit(1)
    })
})

