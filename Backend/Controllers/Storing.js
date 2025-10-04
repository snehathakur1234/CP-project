const {Application} = require("../Models/ApplicationModel");

const StoreApplication =async(req,res)=>{
    const info = req.body;
    
    if(!info)
    {
        res.send({status:401,success:false,msg:"dont't get the data"});
    }
    else
    {
        const appModel = new Application({StudentName:info.StudentName,Room_no:info.Room_no,email:info.email,ApplicationType:info.ApplicationType,start_Date:info.start_Date,end_date:info.end_date,reason:info.reason,urgancy:info.urgancy,SupportingDoc:""});
        await appModel.save();
        res.send({status:200,success:true,msg:"Application Sent"});
    }
}

module.exports = {StoreApplication};