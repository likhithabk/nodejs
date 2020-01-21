 const express=require('express');
 const xyz=express();
//  READ THE INPUTFORM AND STORE IN JS
 const parse=require('body-parser');
 xyz.use(parse.urlencoded({extended:true}));
 const router1=require('./routers1');
 const router2=require('./routers2');
 xyz.use(router1.fname);
 xyz.use(router1.sname);
 xyz.use(router2.lname);
//  xyz.use(router2.name);
 xyz.use(router1.doller);
 xyz.listen(2200);