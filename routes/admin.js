const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products=  []; 

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('addproduct',{pageTitle:'Add Products',path:'/admin/addproduct',formCSS:true,productCSS:true,activeAddProduct:true});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // "req.body" is using to expose your bodyparser
  console.log(req.body);
  products.push({'title':req.body.title});
  res.redirect('/');
});

module.exports.routes = router;
module.exports.productArr=products;
