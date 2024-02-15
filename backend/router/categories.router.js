const express = require('express');
const quizzes=require("../db/quizzes");
const categoriesRouter=express.Router();
categoriesRouter.route("/")
.get((req,res)=>{
res.json(quizzes)
});
module.exports=categoriesRouter;