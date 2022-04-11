const express =require("express")

const Router = express.Router()

const{Add_Address,GetAddressBy_Id,UpdateCityBy_Id,DeleteAddressBy_Id,FindAddressWith_User} = require("../controller/Address.controller.js")


Router.post("/Add_Address",Add_Address);

Router.get("/GetAddressBy_Id",GetAddressBy_Id);

Router.put("/UpdateCityBy_Id/:id",UpdateCityBy_Id);

Router.delete("/DeleteAddressBy_Id",DeleteAddressBy_Id);

Router.get("/FindAddressWith_User",FindAddressWith_User);

module.exports = Router