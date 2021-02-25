const mongoose = require("mongoose")
const postSchema =mongoose.Schema({
    userId:{
        type:String
    },
    id:{
        type:String   
    },
    title:{
        type:String   
    },
    body:{
        type:String   
    },
    owner:[{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    }]
})
module.exports=mongoose.model('Post',postSchema);
