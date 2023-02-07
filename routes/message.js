const express=require('express');
const fs=require('fs');
const router=express.Router();


router.get('/',(req,res)=>{
    console.log('iam in the home')
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            data='no caht exists';
            console.log(err);
        }
        console.log(localStorage.getItem('username'))
    res.send(
         
        res.send(`${data}<form onSubmit="document.getElementById('username').value=localStorage.getItem('username')" action='/'  method='POST'>
    <input type='text' name='message' id='message' placeholder='message'> 
    <input type='hidden' name="username" id="username">
    <button type='submit'>send</button>
    </form>`)
    )
  })
  });

router.post('/product',(req,res) =>{
    console.log('iam in the product')
    console.log(req.body.username);
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{ flag: 'a' },(err) =>{
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/')
      }
    })
  })
  module.exports=router;