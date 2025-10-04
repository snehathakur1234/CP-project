const { boolean } = require('joi');
const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
   id:{
     type:String,
     required :true
   },
   type:{
    type:String,
    enum:['application','maintenence','checkin'],
    required:true
   },
   message:{
    type:String,
    required:true
   },
   urgent:{
     type:Boolean,
   }
},{timestamps:true});

const Notification = mongoose.model('Notification',NotificationSchema)
module.exports = Notification;