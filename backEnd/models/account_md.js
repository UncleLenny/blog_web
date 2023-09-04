const mongoose = require('mongoose')
const Schema=mongoose.Schema


const accountSchema = new Schema({
    fullname:{type: String, required:true},
    username:{type: String, required:true, unique:true},
    phone: {type: String, required:true},
    email:{type: String, required:true, unique: true},
    password:{type: String, required:true},
    profilePic:{type:String, required:false, default: 'profilePic.png'},
    status:{true: Boolean},
})


const accounts=mongoose.model("Accounts", accountSchema)
module.exports=accounts