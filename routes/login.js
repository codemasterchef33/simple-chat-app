const express=requrie('express');
const router=express.Router();

router.get("/login", (req,res)=>{
    
  res.send(
      `<html><form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST">
  
      <input id="username" type="text" name="title">
  
      <button type="submit">add</button>
  
  </form>
  </html>`
  
  )
  })

  router.post('/login',(req,res,next)=>{
    res.redirect('/');
  })
  module.exports=router;