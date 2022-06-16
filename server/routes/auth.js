const router=require("express").Router();
const{User}=require("../models/user");
const Joi=require("joi");
const bcrypt=require("bcrypt")
const Token=require("../models/token");
const sendEmail=require("../utils/sendEmail")
const crypto=require("crypto");

router.post("/",async(req,res)=>{
    try{
        console.log(req.body)
        console.log("Above data is in the server")
        const{error}=validate(req.body);
        if(error)
        {
            console.log("ERROR");
            return res.status(400).send({message:error.details[0].message});
        }
        console.log("NO ERROR")
        const user =await User.findOne({email:req.body.email});
        if(!user)
            return res.status(401).send({message:"Invalid Email or Password"});
        console.log("VALID USER")
        const validPassword=await bcrypt.compare(
            req.body.password,user.password
        )
        if(!validPassword)
            return res.status(401).send({message:"Invalid Email or Password"});
        console.log("VALID PASSWORD")
        
        if(!user.verified){
            let token=await Token.findOne({userId:user._id});
            if(!token)
            {
                token=await new Token({
                    userId:user._id,
                    token:crypto.randomBytes(32).toString("hex"),
                }).save();
                
                const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
        
            }
            console.log("Email sent according to auth file")
            return res.status(400).send({message:"An email sent to your account, please verify"})
        }
        const token=user.generateAuthToken();
        res.status(200).send({data:token,message:"Logged in Successfully"})
    }
        
    catch(error){
        res.status(500).send({message:error.message})
    }
})
const validate=(data)=>{
    const schema=Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports=router;