const express = require("express")
const router = express.Router()
const {login} = require("../controller/userController.js")


router.route("/login").post(login)


module.exports =  router
