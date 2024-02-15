const express = require('express')
const jwt=require("jsonwebtoken");
const{v4:uuid}=require("uuid");
const userdata=require("../db/users");
const loginRouter = require('../router/auth.router');

const loginHandler=(req, res) => {
    const {email,password}=req.body;
    const verified=userdata.users.some(user=>user.email===email&&user.password===password);
    //console.log(verified);
    if(verified){
        const token = jwt.sign({id:email},"student");
        res.status(200).json({token,message:"verified user"});
    }
    else{
        res.status(401).json({message:"invalid details"});
    }
    }

//new user sign in
    const signupHandler=(req,res)=>
{
  const {username,password}=req.body;
  const isPresent=userdata.users.some(user=>user.username===username)
  if(isPresent){
    res.status(422).json({message:"user already signed in"});
  }
  else{
    const id=uuid();
    const newuser={id,username,password};
    userdata.users=[...userdata.users,newuser];
    const token=jwt.sign({id:username},"student");
    res.json({message:`sucess-created new user -->${username}`,token})

  }
}
    module.exports={loginHandler,signupHandler};