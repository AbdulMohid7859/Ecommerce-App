const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    email :{
        type : String,
        unique : true,
        required :true,
 
    },
    phonenumber : {

        type : String,
        unique : true,
        required :true

    },
     firstname : { 
                    
        type : String,
    },
    lastname : { 

        type : String,
    },
    password : { 

        type : String,
        unique : true,
        required :true
    },
    roll : { 

        type : String,
        default: 'ROLE_USER',
        enum: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_SELLER']
    },
    updated : Date ,

    created : {
        type : Date,
        default : Date.now
    },

});


const usermodel  = new mongoose.model("userinfo",userSchema)

module.exports = usermodel