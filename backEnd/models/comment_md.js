const mongoose = require('mongoose')
const Schema=mongoose.Schema

const commentSchema = new Schema({
    accountId:{type:Schema.Types.ObjectId, ref: 'Accounts'},
    storyId:{type:Schema.Types.ObjectId, ref: 'Story'},
    comment:{type:String, required:true}
})

const comments=mongoose.model("Comments", commentSchema)
module.exports=comments