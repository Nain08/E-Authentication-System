const router=require("express").Router();
const {User,validate}=require("../models/user");
const bcrypt=require("bcrypt");


router.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        const {error}=validate(req.body);
        if(error)
            return res.status(400).send({message:error.details[0].message});

        let user=await User.findOne({email:req.body.email});
        if(user)
            return res.status(409).send({message:"User with given email already exists"})
        const salt=await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword=await bcrypt.hash(req.body.password, salt);
    
        user=await new User({...req.body,password:hashPassword}).save();
        
        res.status(201).send({message:"User Created Successully"});
    }
    catch(error){
        res.status(500).send({message:error.message})

    }
});

module.exports = router;