const mongoose = require("mongoose")


const catschema = new mongoose.Schema({
    _id :{
        type : mongoose.Schema.ObjectId,
        auto : true
    },
    cat_code:{
        type:String
    },
    cat_name:{
        type : String,
        required: true,
    },
    is_active :{
        type: Boolean,
        default:false
    },
    created_date : {
        type : Date,
    },
    updated_date :{ 
        type : Date,
        default:Date.now
    },
    subcatid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcat"
    }],
})

const catmodel = new mongoose.model("category",catschema)

module.exports = catmodel