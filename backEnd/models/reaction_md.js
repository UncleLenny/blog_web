const mongoose = require('mongoose')
const Schema=mongoose.Schema

const reactionSchema = new Schema({
    accountId:{type:Schema.Types.ObjectId, ref: 'Accounts'},
    storyId:{type:String, required:true},
    likeId:{type:String, required:true},
    reaction:{type:String, required:true}
})

const reactions=mongoose.model("Like", reactionSchema)
module.exports=reactions