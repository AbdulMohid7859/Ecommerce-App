const mongoose = require("mongoose")

const subcatschema = new mongoose.Schema({
        catid :{
            type:mongoose.Schema.Types.ObjectId,
            ref : "category"
        },
        subcatname : {
            type:String,
        },
        subcatcode :{
            type : String
        },
        is_active : {
            type:Boolean,
            default : true
        },

        updateddate : Date,

        createddate :{
            type :Date,
            default:Date.now
        }


})

const subcatmodel = new mongoose.model("subcat",subcatschema)

module.exports = subcatmodel