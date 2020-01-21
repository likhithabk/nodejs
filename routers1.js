const express=require('express');
const router1=express();

exports.fname = router1.get('/new',(req,res,next)=>{
res.send('<form action="/page" method="POST"<lable><input type="text" name="box"></input type></lable><button>"add"</button></form>')
});

exports.sname=router1.get('/middle',(req,res,next)=>{
    res.send('<form action="/page" method="POST"<lable><input type="text" name="boxs"></input type></lable><button>"sub"</button></form>');
    });
   