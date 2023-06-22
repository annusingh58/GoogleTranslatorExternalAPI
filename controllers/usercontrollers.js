import User from "../modules/user.js";
import encrypt from "encryptjs";
import axios from "axios";

export const register=async(req,res)=>{
    try{

        const {name,email,password}=req.body;

        if(!name)return res.send("name is required");
        if(!email)return res.send("email is required");
        if(!password)return res.send("password is required");


         const response=await User.find({email}).exec();

         if(response.length) return res.send("email is already exits");

         const secretkey="pin";
         const encryptkey=encrypt.encrypt(password,secretkey,256);


         const user= new User({
            name,
            email,
            password:encryptkey
         });

         await  user.save();
         return res.send("registeration done");

    }
    catch(error){
        return res.send(error);
    }
}




export const detect = async(req,res) =>{
    try{

const encodedParams = new URLSearchParams();
encodedParams.set('q', 'English is hard, but detectably so');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams,
};

	const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);


    }
    catch(error){
        return res.send(error)
    }
}



export const languages =async(req,res)=>{
    try{

        const options = {
          method: 'GET',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
          headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          }
        };

	const response = await axios.request(options);
	res.send(response.data);

    }
    catch(error){
        return res.send(error);
    }
}


export const translate=async(req,res)=>{
    try{
        // const axios = require('axios');

        const encodedParams = new URLSearchParams();
        encodedParams.set('q', ' asmaan');
        encodedParams.set('target', 'es');
        encodedParams.set('source', 'en');
        
        const options = {
          method: 'POST',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          data: encodedParams,
        };
	const response = await axios.request(options);
	res.send(response.data);

    }
    catch(error){
        return res.send(error);
    }
}
