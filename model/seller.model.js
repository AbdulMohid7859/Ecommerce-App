const mongoose = require("mongoose")

const sellerschema = new mongoose.Schema({
     AddId :{
         type: mongoose.Schema.Types.ObjectId,
         ref : "Address"
     }  ,
    email : {
            type : String,
            required: true,
            unique:true
        },
        contact:{
            type : String,
            unique:true
        },
        firstname:{
            type : String,
        },
        lastname:{
            type : String
        },
        roll:{
            type : String,
            default:'ROLE_SELLER',
            enum:['ROLE_ADMIN','ROLE_SELLER','ROLE_USER']
        },
        shopname:{
            type : String
        },
        status : {
            type:String,
            default:'ACTIVATED_SELLER',
            enum :['ACTIVATED_SELLER','DEACTIVATED_SELLER']
        },
        password :{
            type : String
        },

        updateddate:Date,
        
        createddata :{
            type : Date,
            default: Date.now
        }

})

const sellermodel = new mongoose.model("sellerdetails",sellerschema)

module.exports = sellermodel