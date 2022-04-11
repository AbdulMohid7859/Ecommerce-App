const Addressmodel = require("../model/Address.model")

const Add_Address=(req,res)=>{
    let userId = req.body.userId
    let address = req.body.address;
    let city = req.body.city;
    let zipcode = req.body.zipcode;
    let state = req.body.state;
    let country = req.body.country;
    let ispermanent =req.body.ispermanent;
    let updateddate = req.body.updateddate;
    let createddate = req.body.createddate;

    let docu = new Addressmodel({userId:userId, address:address,city:city,zipcode:zipcode,state:state,country:country,ispermanent:ispermanent,updateddate:updateddate,createddate:createddate}) 

        docu.save((err,data)=>{
            if(err){
                return res.status(400).json({error : err, msg : "data not inserted"})
            }else{
                return res.status(200).json({result : data, msg : "data inserted"})
            }
        })
}

const GetAddressBy_Id = (req,res)=>{
    let id = req.query.id

Addressmodel.findById({_id:id},(err,data)=>{
    if(err){
        return res.status(400).json({error : err, msg : "find error"})
    }else{
        return res.status(200).json({result : data , msg : " got address"})
    }
})
}

const UpdateCityBy_Id = (req,res)=>{
    let id = req.params.id
    let city = req.body.city;
    let updatecity = {city : city };

    Addressmodel.findOneAndUpdate ({_id : id} , updatecity ,(err, data)=>{
        if(err){
            return res.status(400).json({error : err , msg : "find error to update"})
        }else{
            return res.status(200).json({result : data , msg : "city updated"})
        }
    })
}

const DeleteAddressBy_Id = (req,res)=>{
    let id = req.query.id;

    Addressmodel.deleteOne({_id : id},(err, data)=>{
        if(err){
            return res.status(400).json({error : err , msg : "address not deleted"})
        }else{
            return res.status(200).json({result : data , msg : "Address deleted"})
        }
})
}

const FindAddressWith_User =(req , res )=>{
    let page = req.query.page - 1
    let limit = req.query.limit
    let skip= page * limit;
    Addressmodel.find().limit(limit).skip(skip).populate("userId")
    .then((data)=>{
        return res.status(200).json({total : data.length  , msg : "successfully got category" , result : data })
    })
    .catch(  (err)=>{return res.status(400).json({error : err , msg : "failed to get category"})}
    )
}

module.exports = {Add_Address,GetAddressBy_Id,UpdateCityBy_Id,DeleteAddressBy_Id,FindAddressWith_User}