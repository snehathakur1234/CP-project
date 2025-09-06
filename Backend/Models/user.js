const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    name : {
        type :String,
        required : true
    },
    email :
    {
        type :String ,
        required : true,
        unique : true
    },
    password:
    {
        type: String,
        required : true
    }
    ,   
      role: {
    type: String,
    enum: ["user", "admin", "parent"],
    default: "user",
    required: true
  }
});


const userModel = mongoose.model('users',UserSchema);
module.exports = userModel;