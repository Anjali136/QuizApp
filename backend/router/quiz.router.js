const express = require('express');
const quizzes=require("../db/quizzes");
const quizRouter=express.Router();
const authverify=require("../middleware/authverify")
quizRouter.route("/")
.get(authverify,(req,res)=>{
res.json(quizzes.data)
});
module.exports=quizRouter;