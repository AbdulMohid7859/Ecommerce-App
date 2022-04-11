const express = require("express")
const sellermodel = require("../model/seller.model")

const Router = express.Router()

Router.post("/Add_seller",(req,res)=>{
    let AddId = req.body.AddId;
    let email = req.body.email;
    let contact = req.body.contact; 
    let firstname = req.body.firstname;   
    let lastname = req.body.lastname;
    let roll = req.body.roll;
    let shopname = req.body.shopname;
    let status = req.body.status;
    let password = req.body.password;
    let updateddate = req.body.updated;
    
let seller = new sellermodel({AddId:AddId,email:email,contact:contact,firstname:firstname,lastname:lastname,
    roll:roll,shopname:shopname,status:status,password:password,updateddate:updateddate})

    seller.save((err,data)=>{
        if (err){
            return res.status(400).json({error : err, msg : "data not added in DB "})
        }else{
            return res.status(201).json({result : data , msg : " data added in DB "})
        }
    })
})

Router.get("/GetAllSeller",(req,res)=>{

    sellermodel.find((err,data)=>{
        if(err){
        return res.status(400).json({error : err, msg : "seller not found"})
    }else{
        
        return res.status(200).json({result : data, msg : "get all seller"})

    }
})
})

Router.get("/GetSellerById",(req,res)=>{
    let _id = req.query._id
    let email = req.query.email

    sellermodel.find({_id : _id,email:email},(err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "seller not found"})
        }else{
            return res.status(200).json({result : data , msg : "get seller data"})
        } 
    })
})

Router.get("/GetAllSellerWithLimit",(req,res)=>{
    let page =req.query.page-1
    let limit = req.query.limit
    let skip = page*limit

    sellermodel.find((err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "seller data not found"})
        }else{
            return res.status(200).json({No_of_rows: data.length, result: data , msg : "get all seller data"})
        }
    }).limit(limit).skip(skip).populate("AddId")
})

Router.put("/UpdateSellerById",(req,res)=>{
    let id= req.query.id;

    let email = req.body.email;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    let updated = {email:email,firstname:firstname,lastname:lastname}

    sellermodel.findOneAndUpdate({_id : id}, updated , (err,data)=>{
        if(err){
            return res.status(404).json({error : err,msg : "not updated" })
        }else{
            return res.status(404).json({result:data, msg:"profile updated "})
        }
    })

})

Router.delete("/DeleteSellerById",(req,res)=>{
    let _id = req.query._id

    sellermodel.deleteOne({_id : _id},(err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "data not deleted"})
        }else{
            return res.status(200).json({result : data , msg : "seller data Delete"})
        }
        

    })

})

module.exports= Router