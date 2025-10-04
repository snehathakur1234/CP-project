const { required, date } = require("joi");
const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
     StudentName:{
        type :String,
        required:true, 
     },
    Room_no:{
        type :String,
        required:true, 
     },
    email:{
        type :String,
        required:true, 
     },
    ApplicationType:{
        type :String,
        required:true, 
     },
     start_Date:
     {
        type :Date,
        required:true, 
     },
     end_date:
     {
        type :Date,
        required:true, 
     },
     reason:{
       type :String,
        required:true,   
     },
     urgancy:{
        type:Boolean,
        required:true,
     },
     SupportingDoc:{
        type:String,
        default:""
     },
     Accepted:{
      type:Number,
      default:0
     }

}); 


const Application = mongoose.model("Application",ApplicationSchema);
module.exports = Application;