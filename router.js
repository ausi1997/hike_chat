// init code 
const express = require("express");

// creating the express router
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("server is up");
});

module.exports = router;