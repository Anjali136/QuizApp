const jwt=require("jsonwebtoken");


const routeNotFound=(req,res)=>{
    res.status(404).json("route not found");
}
module.exports=routeNotFound;