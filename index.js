const express = require("express")
const app = express();
app.use(express.json()); 
const db =require("./config.js");
const UserRouter = require("./router/user.router.js")
const AddressRouter = require("./router/Address.router.js")
const SellerRouter = require("./router/seller.router.js")
const CategoryRouter = require("./router/category.router")
const SubCategoryRouter = require("./router/subcat.router")

app.use("/user",UserRouter);
app.use("/Address",AddressRouter)
app.use("/seller",SellerRouter)
app.use("/category",CategoryRouter)
app.use("/subcat",SubCategoryRouter)
// app.post("/user2",async (req,res)=>{

//    const datasend = new usermodel(req.body);

//     let resp = await usermodel.save()
//     /*
//     datasend.save((err , data)=>{})
//     */
//     console.log(resp);
//     console.log("abcd");    
//     return res.send(resp)
// })

// app.get("/user2",async (req,res)=>{
//     let name1 = req.query.name;
//     // const datasend = new usermodel(req.body);
//     let resp = await usermodel.find({  name : name1})
//     console.log(resp);
//     return res.send(resp)
// })

// app.get("/user2/:id", (req,res)=>{
//     let ids = req.params.id;
//     // const datasend = new usermodel(req.body);
//     usermodel.findById(ids , (err , data)=>{
//         if(err)
//         {
//             return res.send(err)

//         }else{
//             return res.send(data)

//         }
//     })
//     })

// app.post("/AddUser",(req,res)=>{
//     let email = req.body.email;
//     let phonenumber = req.body.phonenumber; 
//     let firstname = req.body.firstname;   
//     let lastname = req.body.lastname;
//     let password = req.body.password;
//     let roll = req.body.roll;
//     let updated = req.body.updated;

// let doc = new usermodel({email : email,phonenumber:phonenumber,firstname:firstname,lastname:lastname,password:password,roll:roll,updated:updated },);

// doc.save((err,data)=>{
//     if(err){
//         return res.status(400).json({error : err,msg :"error"})
//     }else{
//         return res.status(200).json({result : data,msg : "insert successfully"})
//     }
// })

// //return res.status(200).json(resp)


// // (err,data)=>{
// //     if(err){
// //         console.log("data not add",err)
// //     }else{
// //         console.log(data,"data updated ");
// //     }
// // })
// // resp.then((data)=>{
// //     console.log("then inside");
// //     return res.json({result : data , msg : "category added"})
// // }).catch((err)=>{
// //     console.log("catch inside");
// //     if(err)
// //     {
// //     console.log("error",err);
        
// //     }
// //     return res.send({ msg : "something went wrong" , error : err})})
// // 
// })

// app.get("/GetAllUser",(req,res)=>{

//     usermodel.find((err,data)=>{
//         if(err){
//             return res.status(400).json({error : err, msg : "error in find"})
//         }else{
//             return res.status(200).json({result : data,msg : "got all user"})
//         }
//     })
// })



// app.get("/GetAllUserWithLimite",(req,res)=>{

//     let page = req.query.page-1;
//     let limit = req.query.limit;
//     let skip = limit * page;

// usermodel.find().limit(limit).skip(skip).then((data)=> {
//         return res.status(200).send({total : data.length,
//          msg : "successfully get all user", result : data})})
//     .catch((err)=>{
//         return res.status(400).send({error : err, msg : "failled to get user"})
//         })
//     })

// app.get("/GetUserById",(req,res)=>{
//     let ids = req.query.ids;

//     usermodel.findById(ids,(err,data)=>{
//         if(err){
//             return res.status(404).send({error : err,msg : "user not found "})
//         }else{
//             return res.status(200).send({result : data})
//         }
//     })
// })


// app.put("/UpdateUser",(req, res)=>{
//     let id =req.query.id;
//     let name = req.body.firstname
//     let updateddata = {firstname : name}

//     usermodel.findOneAndUpdate({ _id : id }, updateddata,(err,data)=>{
//         if(err){
//             return res.status(400).json({error :err, msg : "error in update"})
//         }else{
//             return res.status(200).json({result : data, msg : "updated successfully"})
//         }
//     })
// });

// app.put("/UpdatePasswordBy_Email",(req, res)=>{
//     let email =req.query.email;
//     let newpassword = req.body.newpassword;
//     let updateddata = {password : newpassword}

//     usermodel.findOneAndUpdate(email, updateddata,(err,data)=>{
//         if(err){
//             return res.status(404).json({error :err, msg : "error in update"})
//         }else{
//             return res.status(200).json({result : data ,msg : "updated successfully"})
//         }
//     })
// });

// app.delete("/DeleteUserById",(req,res)=>{
//     let id = req.query.id

//     usermodel.deleteOne({_id : id},(err,data)=>{
//         if(err){
//             return res.status(400).json({error : err , msg : "error found "})
//         }else{
//             return res.status(200).json({result : data , msg : "user deleted"})
//         }
//     })
// })

// //join 2 collection with each other {add adress with anoter (userinfo) collection by userId (populate)}
// app.post("/Add_Address",(req,res)=>{
//     let userId = req.body.userId
//     let address = req.body.address;
//     let city = req.body.city;
//     let zipcode = req.body.zipcode;
//     let state = req.body.state;
//     let country = req.body.country;
//     let ispermanent =req.body.ispermanent;
//     let updateddate = req.body.updateddate;
//     let createddate = req.body.createddate;

//     let docu = new Addressmodel({userId:userId, address:address,city:city,zipcode:zipcode,state:state,country:country,ispermanent:ispermanent,updateddate:updateddate,createddate:createddate}) 

//         docu.save((err,data)=>{
//             if(err){
//                 return res.status(400).json({error : err, msg : "data not inserted"})
//             }else{
//                 return res.status(200).json({result : data, msg : "data inserted"})
//             }
//         })
// })


// app.get("/GetAddressBy_Id",(req,res)=>{
//     let id = req.query.id

// Addressmodel.findById({_id:id},(err,data)=>{
//     if(err){
//         return res.status(400).json({error : err, msg : "find error"})
//     }else{
//         return res.status(200).json({result : data , msg : " got address"})
//     }
// })
// })


// app.put("/UpdateCityBy_Id/:id",(req,res)=>{
//     let id = req.params.id
//     let city = req.body.city;
//     let updatecity = {city : city };

//     Addressmodel.findOneAndUpdate ({_id : id} , updatecity ,(err, data)=>{
//         if(err){
//             return res.status(400).json({error : err , msg : "find error to update"})
//         }else{
//             return res.status(200).json({result : data , msg : "city updated"})
//         }
//     })
// })

// app.delete("/DeleteAddressBy_Id",(req,res)=>{
//     let id = req.query.id;

//     Addressmodel.deleteOne({_id : id},(err, data)=>{
//         if(err){
//             return res.status(400).json({error : err , msg : "address not deleted"})
//         }else{
//             return res.status(200).json({result : data , msg : "Address deleted"})
//         }
// })
// })


// //find addess with userinfo by populate 
// app.get( "/FindAddressWith_User",(req , res )=>{
//     let page = req.query.pageNo - 1
//     let limit = req.query.limit
//     let skip= page * limit;
//     Addressmodel.find().limit(limit).skip(skip).populate("userId")
//     .then((data)=>{
//         return res.status(200).json({total : data.length  , msg : "successfully got category" , result : data })
//     })
//     .catch(  (err)=>{return res.status(400).json({error : err , msg : "failed to get category"})}
//     )
// })


app.listen(8000,(err)=>{
    if(!err){
        console.log("server is connected 8000");
    }else{
        console.log("server failed",err)
    }
})
