const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Seller=require('../Models/seller');

var otpStore='';
const transporter = nodemailer.createTransport((
    {
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"jithendra98982@gmail.com",
            pass:"mrlm ifvb leav boso"
        }
    }
));

function generateOpt(){
    return Math.floor(1000+Math.random()*900000).toString();

}
router.post("/",async(req,res)=>{
  try{
    const email=req.body.email;
    const sellerid=String(req.body.sellerid);

   
   
    const seller = await Seller.findOne({ sellerid: sellerid });
    

    console.log(seller);
    if (!seller) {
        return res.status(404).json({ message: 'Seller not found' });
    } 
    
    if(email==seller.selleremail){
      const otp=generateOpt();
      otpStore=otp;
      console.log(otp);
      const mailOption ={
          from:"jithendra98982@gmail.com",
          to:email,
          subject:"REAL-ESTATE OTP verification",
          text:`Hii! Dear customer,\n  please verify the OTP  :${otp} to move nexts steps. \n thank you for visting ☺.\n please dont share the otp to anyone else for your saftey`,
      };
      try{
     await transporter.sendMail(mailOption,( err,info)=>{
  if(err){
  console.log(err);
  return;
  }
  console.log(`OPT SENT SUCCESSFULLY TO YOU MAIL ${email}`);
     });
     return res.status(200).json({
  message:'OTP SENT SUCCESSFULLY'
      })}
      catch(err){
  console.error("Error sending OTP: " ,err);
   return res.status(404).json({success:false,message:"Error sending OTP"});
  
      }

    }
    else{
     return res.status(401).json({message:'email invalid'});
    }


    
} catch (error) {
    res.status(500).json({ message: error.message });
}
});



   


router.post("/verify-otp",async(req,res)=>{
    const otp = req.body.otp;
  // Get the expected OTP from memory
  const expectedOTP = otpStore;
  // expected OTP is not set, return an error
  if (!expectedOTP) {
    res.status(400).json({
      message: "Expected OTP not set.",
    });
    return res.status(400);
  }
  console.log(otp);
  console.log(expectedOTP);
  // Verify the OTP
  if (otp !== expectedOTP) {
    res.status(401).json({
      message: "OTP is invalid.",
    });
    return;
  }
  // The OTP is valid.
  return res.status(200).json({
    status: 200,
    message: "OTP verified successfully.",
  });
});

module.exports= router;

