const app = require("./app.js")
const dotenv = require("dotenv")

process.on("uncaughtException" , (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting Down due to Uncaught Exception error`)

    process.exit(1)
})

//Set environment Configration
dotenv.config({path : "src/config/.env"})


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

