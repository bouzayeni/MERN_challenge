const mongoose = require ('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    age: Number,
     email:{
    type:String,
     required:true
},
     password:{
        type:String,
        required:true
    },
})
const model = mongoose.model('user',userSchema)
module.exports = model