const express = require("express")
const Router = express.Router()
const catmodel = require("../model/category.model")

Router.post("/Add_category",(req,res)=>{
    let document = new catmodel({
        
        cat_code : req.body.code,
        cat_name:req.body.catname,
        is_active : req.body.active,
        created_date:req.body.createddate,
        updated_date:req.body.updateddate,
        subcatid:req.body.subcatid

    })

    document.save((err,data)=>{
        if (err){
            return res.status(400).json({error : err, msg : "data not added in DB "})
        }else{
            return res.status(201).json({result : data , msg : " data added in DB "})
        }
    })
})

Router.get("/GetAllCategory",(req,res)=>{

    catmodel.find((err,data)=>{
        if(err){
        return res.status(400).json({error : err, msg : "data not found"})
    }else{
        
        return res.status(200).json({result : data, msg : "get all category"})

    }
}).populate("subcatid")
})

Router.get("/GetCategoryById",(req,res)=>{
    let _id = req.query.id

    catmodel.findById(_id ,(err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "seller not found"})
        }else{
            return res.status(200).json({result : data , msg : "get seller data"})
        } 
    })
})

Router.get("/GetAllCategoryWithPagination",(req,res)=>{
    let page =req.query.page-1
    let limit = req.query.limit
    let skip = page*limit

    catmodel.find().limit(limit).skip(skip).exec((err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : " data not found"})
        }else{
            return res.status(200).json({No_of_rows: data.length, result: data , msg : "got all data successfully"})
        }
    })
})

Router.put("/UpdateCatNameById",(req,res)=>{

    let id= req.query.id;

    let cat_name = req.body.catname;

    let updated = {cat_name :cat_name }

    catmodel.findOneAndUpdate({_id : id}, updated , (err,data)=>{
        if(err){
            return res.status(404).json({error : err,msg : "not updated" })
        }else{
            return res.status(404).json({result:data, msg:" category updated "})
        }
    })

})

Router.put("/UpdateCatStatusByCode",(req,res)=>{

    let cat_code = req.query.code;

    let is_active = req.body.active;

    let updated = {is_active :is_active }

    catmodel.findOneAndUpdate({cat_code : cat_code}, updated , (err,data)=>{
        if(err){
            return res.status(404).json({error : err,msg : "not updated" })
        }else{
            return res.status(404).json({result:data, msg:" category updated "})
        }
    })

})

Router.delete("/DeleteCategoryById",(req,res)=>{
    let _id = req.query._id

    catmodel.deleteOne({_id : _id},(err,data)=>{
        if (err){
            return res.status(400).json({error : err , msg : "Data not Deleted"})
        }else{
            return res.status(200).json({result : data , msg : "Data Deleted"})
        }
        

    })

})

module.exports = Router