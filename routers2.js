const express=require('express');
const abc=express();

exports.lname=abc.post('/page',(req,res,next)=>{
    res.send('<form action="/" method="POST"<lable><input type="text" name="boxs1"></input type></lable><button>"addition"</button></form>');
    // res.redirect('/');
    // console.log(req.body);
}) ;
exports.name=abc.use('/',(req,res,next)=>{
    res.send('404 page not found');
    console.log(req.body);
});