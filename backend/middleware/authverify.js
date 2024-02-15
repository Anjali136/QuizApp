const jwt=require("jsonwebtoken");

    const authverify=(req,res,next)=>
    {
        const token =req.headers.authorization;
        try{
            const decodedToken=jwt.verify(token,"student");
            req.user={userId:decodedToken.id}
            return next();
        }catch(err)
        {
            console.error(`error occured ${JSON.stringify(err)}`);
        }
    }
    module.exports=authverify;