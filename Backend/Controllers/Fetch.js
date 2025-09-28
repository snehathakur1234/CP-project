const Form = require('../Models/Form');
const User = require('../Models/user');
const Rooms = require('../Models/Rooms');

const saveForm = async(req,res) =>{
        try{

            const{s_name,department,division,r_no,s_phone,p_phone,address,photo_url} = req.body;
            console.log(s_name+" "+department+" "+division+" "+r_no+" "+s_phone+" "+p_phone+" "+address+" "+photo_url);
            const form = await Form.findOne({s_phone});

            if(form)
            {
                return res.status(409).json({message:'Student is already exist',success : false});
            }

            const formModel = new Form({s_name,department,division,r_no,s_phone,p_phone,address,photo_url});

            await formModel.save();

            res.json({
                status:201,
                message:"Student Added Successfully",
                success : true
            })
        }
        catch(err)
        {
            res.status(500).json({
            message:"Form Submissinon Error",
            success:false
        })
        }
}

const getAdmin = async(req,res) =>{
         try{
            const admins =await  User.find({role:"admin"}).lean();
            console.log(admins[0].rooms);
            res.json( {message: "Admins Retrived successfully", success: true, data:admins[0].rooms});
         }
         catch(err)
         {
            res.status(500).json({
                message: "Error fetching admins",
                success: false,
                error: err.message
            });
         }
}

const getStud = async(req,res)=>{
    try{
        const data = await User.find().lean();
        console.log(data.length-1);
        res.json({messgae:"All data fetched",success:true,data:data.length-1});
    }
    catch(err)
    {
        res.status(500).json({
            message: "Error fetching admins",
            success: false,
            error: err.message
        });
    }
}

const saveData = async(req,res) =>{
    try{
         const {id,status,students,capacity,current} =req.body;
         console.log(id+" "+status+" "+students+" "+capacity+" "+current);

         const RoomsData = new Rooms({id,status,students,capacity,current});

         await RoomsData.save();
    }
    catch{

    }
}
module.exports = {saveForm , getAdmin , getStud,saveData};


