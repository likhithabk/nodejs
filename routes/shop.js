const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData=require('./admin')
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js');
  console.log(adminData.productArr);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products=adminData.productArr;
  res.render('shop',{prods:products,pageTitle:'Shop',path:'/',hasproduct:products.length > 0,productCSS:true,shopActive:true});
});

module.exports = router; 
