const usermodel = require("../model/user.model.js")


const AddUser = (req,res)=>{
    let email = req.body.email;
    let phonenumber = req.body.phonenumber; 
    let firstname = req.body.firstname;   
    let lastname = req.body.lastname;
    let password = req.body.password;
    let roll = req.body.roll;
    let updated = req.body.updated

let doc = new usermodel({email : email,phonenumber:phonenumber,firstname:firstname,lastname:lastname,password:password,roll:roll,updated:updated },);

doc.save((err,data)=>{
    if(err){
        return res.status(400).json({error : err,msg :"error"})
    }else{
        return res.status(200).json({result : data,msg : "insert successfully"})
    }
})

//return res.status(200).json(resp)


// (err,data)=>{
//     if(err){
//         console.log("data not add",err)
//     }else{
//         console.log(data,"data updated ");
//     }
// })
// resp.then((data)=>{
//     console.log("then inside");
//     return res.json({result : data , msg : "category added"})
// }).catch((err)=>{
//     console.log("catch inside");
//     if(err)
//     {
//     console.log("error",err);
        
//     }
//     return res.send({ msg : "something went wrong" , error : err})})
// 
}

const GetAllUser =(req,res)=>{

    usermodel.find((err,data)=>{
        if(err){
            return res.status(400).json({error : err, msg : "error in find"})
        }else{
            return res.status(200).json({result : data,msg : "got all user"})
        }
    })
}

const GetAllUserWithLimite =(req,res)=>{

    let page = req.query.page-1;
    let limit = req.query.limit;
    let skip = limit * page;

usermodel.find().limit(limit).skip(skip).then((data)=> {
        return res.status(200).send({total : data.length,
         msg : "successfully get all user", result : data})})
    .catch((err)=>{
        return res.status(400).send({error : err, msg : "failled to get user"})
        })
}

const GetUserById =(req,res)=>{
    let ids = req.query.ids;

    usermodel.findById(ids,(err,data)=>{
        if(err){
            return res.status(404).send({error : err,msg : "user not found "})
        }else{
            return res.status(200).send({result : data})
        }
    })
}

const UpdateUser =(req, res)=>{
    let id =req.query.id;
    let name = req.body.firstname
    let updateddata = {firstname : name}

    usermodel.findOneAndUpdate({ _id : id }, updateddata,(err,data)=>{
        if(err){
            return res.status(400).json({error :err, msg : "error in update"})
        }else{
            return res.status(200).json({result : data, msg : "updated successfully"})
        }
    })
}

const UpdatePasswordBy_Email =(req, res)=>{
    let email =req.query.email;
    let newpassword = req.body.newpassword;
    let updateddata = {password : newpassword}

    usermodel.findOneAndUpdate({email:email}, updateddata,(err,data)=>{
        if(err){
            return res.status(404).json({error :err, msg : "error in update"})
        }else{
            return res.status(200).json({result : data ,msg : "updated successfully"})
        }
    })
}

const DeleteUserById =(req,res)=>{
    let id = req.query.id

    usermodel.deleteOne({_id : id},(err,data)=>{
        if(err){
            return res.status(400).json({error : err , msg : "error found "})
        }else{
            return res.status(200).json({result : data , msg : "user deleted"})
        }
    })
}

module.exports = {AddUser,GetAllUser,GetAllUserWithLimite,GetUserById,UpdateUser,UpdatePasswordBy_Email,DeleteUserById}