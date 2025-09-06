const ensureAuthenticated = require("../Middlewares/Auth")

const router = require('express').Router();

router.get('/',ensureAuthenticated,(req,res)=>{
    res.status(200).json([{name:"Mobile",price:1000},{name:"tv",price:20000}])
});

module.exports = router;