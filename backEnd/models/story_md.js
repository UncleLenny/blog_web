const mongoose = require('mongoose')
const Schema=mongoose.Schema

const storySchema = new Schema({
    accountId:{type: Schema.Types.ObjectId, ref: 'Accounts'},
    category:{type: String, required:true},
    topic:{type: String, required:true},
    content:{type: String, required:true},
    image:{type:String, required:false}
})

const stories=mongoose.model("Story", storySchema)
module.exports=stories