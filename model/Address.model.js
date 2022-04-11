
const mongoose = require("mongoose")

const Addressschema = new mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userinfo"

    },
address : {
        type : String
    },
city :{
        type : String
    },
zipcode :[{
       type:  String
    }],
state :{
    type : String
},
country :{
    type :String
},
ispermanent :{
    type :Boolean,
    default:false
},
updateddate : Date,

createddate :{
    type : Date,
    default :Date.now
}


})

const Address_model = mongoose.model("Address",Addressschema)

module.exports = Address_model

// addnew address
//get specific address by id
// updatecity
//delete specific by id