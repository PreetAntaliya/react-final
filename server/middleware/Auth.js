const jwt = require('jsonwebtoken');
const verifyToken = async(req,res,next) => {
    try{
        const token = req.headers.authorization;
        if(!token || token === undefined){
            return res.status(401).send({
                success : false,
                message : "Unauthorize access"
            }) 
        }
        let newToken = token.split(" ")[1];
        jwt.verify(newToken,'abcd',(err,user)=>{
            if(err){
                return res.status(401).send({ 
                    success : false,
                    message : "Token is not valid" 
                }) 
            }
            req.user = user;
        });
        return next();
       
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
}

module.exports = {
    verifyToken,
}

// const roleBaseAuth = (role)=>{
//     return (req,res,next) => { 
//         if(!role.includes(req.user.payload.role)){
//             return res.status(200).send({ 
//                 success : false,
//                 message : "Only admin access " + req.user.email
//             }) 
//         }
//         return  next();
//     }
// }