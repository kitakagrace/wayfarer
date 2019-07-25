const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const users = require('./db/userDb');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/v1/signup', (req,res)=>{
    const userSchema = {
        email: req.body.email,
        password:req.body.password,
        first_name:req.body.first_name,
        last_name:req.body.last_name,      
    }
    jwt.sign({userSchema},'secretkey',(error,token)=>{
        
            res.json({
            status: "success",
            data:{
            token:token,
            email: userSchema.email,
            first_name: userSchema.first_name,
            last_name: userSchema.last_name
            }  
       })
       
    })
})

app.post('/api/v1/signup', (req,res)=>{
    const userSchema = {
        email: req.body.email,
        password:req.body.password,
        first_name:req.body.first_name,
        last_name:req.body.last_name,      
    }
    jwt.sign({userSchema},'secretkey',(error,token)=>{
        
            res.json({
            status: "success",
            data:{
            token:token,
            email: userSchema.email,
            first_name: userSchema.first_name,
            last_name: userSchema.last_name
            }  
       })
       
    })
})

app.post('/api/v1/signin', (req,res)=>{
    
    const user = {
        id:1,
        email:'kitakagrace@gmail.com',
        password:"12345",
        first_name: "Kitaka",
        last_name: "Grace"
    }
    jwt.sign({user}, 'secretkey',{ expiresIn: '60s' },(error,token)=>{
        res.json({
            status: "success",
            data:{
                token,
                first_name: user.first_name,
                last_name:user.last_name,
                email:user.email
            }
        })
    })
})


app.listen(PORT, (req,res) =>{
    console.log(`API running at port ${PORT}`)
})