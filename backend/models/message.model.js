import mongoose from "mongoose";

//parent refrencing
const messageSchema = new mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    receiverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    message :{
        type : String,
        required : true,
        default: []
    }

}, {timestamps : true}) //when message is created using this model fields like createdAt and UpdatedAt is found.

const Message = mongoose.model('Message', messageSchema)

export default Message