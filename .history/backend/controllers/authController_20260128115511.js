const User=require("../models/User");

const registerUser=async(req,res)=>{
        try{
        const{email,password,name,role}=req.body;

        if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    
    }

}