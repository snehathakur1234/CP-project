const Application = require('../Models/ApplicationModel');

const getApplications = async(req,res)=>{
 
    const {accept} = req.query; 
    console.log(accept);

    const application = await Application.find({Accepted:accept}).lean();
    console.log(application);
    res.json({success:true,data:application});
 
}

module.exports = {getApplications};