const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    res.send("Blog routes is here")
});
module.exports = Blog;