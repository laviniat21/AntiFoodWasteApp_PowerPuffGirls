const User=require("../modele/User");
const router=require("express").Router();
router.route("/user").post(async(req,res)=>{
    try{
        const newUser=await User.create(req.body); 
        return res.status(200).json(newUser);
    }
    catch(err){
        console.error("nu a mers, dar din routes->user :(((( ", error);
        return res.status(500).json(err);
    }
})

module.exports=router;