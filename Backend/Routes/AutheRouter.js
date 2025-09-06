const { signup,login } = require('../Controllers/AuthCOntroller');
const { signupValidation ,loginValidation} = require('../Middlewares/AuthValidation');
const auth = require('../Middlewares/Auth')

const router = require('express').Router();

router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);

module.exports = router;