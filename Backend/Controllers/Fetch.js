const FormModel = require('../Models/Form');

const saveForm = async(req,res) =>{
        try{

            const{s_name,department,division,r_no,s_phone,p_phone,address,photo_url} = req.body;
            const form = await FormModel.findOne({s_phone});

            if(form)
            {
                return res.status(409)
                .json({message:'Student is already exist',success : false});
            }

            const formModel = new FormModel({s_name,department,division,r_no,s_phone,p_phone,address,photo_url});

            await formModel.save();

            res.status(201)
            .json({
                message:"Studet Added Successfully",
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

module.exports = saveForm;


