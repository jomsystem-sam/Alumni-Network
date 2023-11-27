import mongoose from "mongoose";

const postEventSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    location:String,
    description:String,
    picturePath:String,
    videoPath:String,
    attachmentPath:String,
    userPicturePath:String,
    likes:{
        type:Map,
        of:Boolean,
    },
    comments:{
        type:Array,
        default:[]
    }
},{timestamps:true});

const PostEvent = mongoose.model("PostEvent" , postEventSchema);
export default PostEvent;