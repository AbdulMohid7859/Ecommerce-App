const express = require("express")
const Router = express.Router()
const subcatmodel = require("../model/subcat.model")

Router.post("/Add_subcat",(req,res)=>{
    let document =new subcatmodel(req.body)

    document.save((err,data)=>{
        if(err){
            return res.status(400).json({error : err , msg : "data not saved"})
        }else{
            return res.status(200).json({result : data ,msg : "data saved"})
        }})
})

Router.get("/GetAllSubCategory",(req,res)=>{

        subcatmodel.find((err,data)=>{
            if(err){
            return res.status(400).json({error : err, msg : "data not found"})
        }else{
            
            return res.status(200).json({result : data, msg : "get all subcategory"})
    
        }
    })
})
  
Router.get("/GetSubcategoryById",(req,res)=>{
    let _id = req.query.id

    subcatmodel.findById(_id ,(err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "seller not found"})
        }else{
            return res.status(200).json({result : data , msg : "get seller data"})
        } 
    })
})
    
Router.get("/GetAllSubcategoryWithPagination",(req,res)=>{
   let page =req.query.page-1
   let limit = req.query.limit
   let skip = page*limit

    subcatmodel.find().limit(limit).skip(skip).populate("catid").exec((err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : " data not found"})
        }else{
            return res.status(200).json({No_of_rows: data.length, result: data , msg : "got all data successfully"})
        }
    })
})

Router.put("/UpdateSubcatNameById",(req,res)=>{

    let id= req.query.id;

    let subcatname = req.body.subcatname;

    let updated = {subcatname :subcatname }

    subcatmodel.findOneAndUpdate({_id : id}, updated , (err,data)=>{
        if(err){
            return res.status(404).json({error : err,msg : "not updated" })
        }else{
            return res.status(404).json({result:data, msg:" subcategory updated "})
        }
    })

})

Router.put("/UpdateSubcatStatusByCode",(req,res)=>{

    let subcatcode = req.query.code;

    let is_active = req.body.active;

    let updated = {is_active :is_active }

    subcatmodel.findOneAndUpdate({subcatcode : subcatcode}, updated , (err,data)=>{
        if(err){
            return res.status(404).json({error : err,msg : "not updated" })
        }else{
            return res.status(404).json({result:data, msg:" category updated "})
        }
    })

})

Router.delete("/DeleteSubcategoryById",(req,res)=>{
    let _id = req.query.id

    subcatmodel.deleteOne({_id : _id},(err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "Data not Deleted"})
        }else{
            return res.status(200).json({result : data , msg : "Data Deleted"})
        }
        

    })

})

module.exports = Router