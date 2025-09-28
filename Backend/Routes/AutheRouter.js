const { signup,login } = require('../Controllers/AuthCOntroller');
const { signupValidation ,loginValidation} = require('../Middlewares/AuthValidation');
const auth = require('../Middlewares/Auth')
const {saveForm,getAdmin,saveData} = require('../Controllers/Fetch')


const router = require('express').Router();

router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);
router.post('/saveForm',saveForm);
router.post('/saveData',saveData);//Rooms


module.exports = router;