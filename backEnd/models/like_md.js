const mongoose = require('mongoose')
const Schema=mongoose.Schema

const likeSchema = new Schema({
    accountId:{type:Schema.Types.ObjectId, ref: 'Accounts'},
    storyId:{type:Schema.Types.ObjectId, ref: 'Story'},
    like:{type:Boolean} 
})

const likes=mongoose.model("Like", likeSchema)
module.exports=likes