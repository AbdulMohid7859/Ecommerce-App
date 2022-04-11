const { Route } = require("express")
const express =require("express")
const {check,validationResult} = require("express-validator");
const Router = express.Router()

const {AddUser,GetAllUser,GetAllUserWithLimite,GetUserById,UpdateUser,UpdatePasswordBy_Email,DeleteUserById} = require("../controller/user.controller");
const usermodel = require("../model/user.model");


Router.post("/AddUser",AddUser)

Router.get("/GetAllUser",GetAllUser)

Router.get("/GetAllUserWithLimite",GetAllUserWithLimite)

Router.get("/GetUserById",GetUserById)

Router.put("/UpdateUser",UpdateUser)

Router.put("/UpdatePasswordBy_Email",UpdatePasswordBy_Email)

Router.delete("/DeleteUserById",DeleteUserById)

Router.post("/url",[check("email","email is not valid").isEmail(),
check("password","password should be min 5 char").isLength({min :5}),

],(req,res)=>{

    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(422).json({
            status:false,
            msg : "data is not correct",
            errors:error
        })
    }
 

    let user = new usermodel(req.body)

    user.save((err,data)=>{
        if(err){
            return res.status(400).json({error :err,msg:"data not saved"})
        }else{
            return res.status(200).json({result : data , msg : "data saved "})
        }
    })
})

module.exports = Router