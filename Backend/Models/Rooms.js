const { types } = require("joi");
const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    id:{
        type:String,
        required : true
    }
    ,
    status:{
        type:String,
        default:"allocated"
    },
    students:{
        type:[String],
        default:[],
        required:true,
    },
    capacity:{
        type:Number,
        default:2
    },
    current :
    {
        type:Number,
        default:0
    }
},{timestamps:true});

const Rooms = mongoose.model('Rooms',RoomSchema);
module.exports = Rooms; 
