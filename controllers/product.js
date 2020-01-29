const Product=require('../model/product');

exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{pageTitle:'Add Products',path:'/admin/addproduct',formCSS:true,productCSS:true,activeAddProduct:true});
}
 exports.postAddProduct=(req,res,next)=>{
    // console.log(req.body);
    // creating an object
    const product=new Product(req.body.title);
    // products.push({'title':req.body.title});
    product.save();

    res.redirect('/');
 }

 exports.getProduct=(req,res,next)=>{
     const products=Product.fetchAll();
    console.log('shop.js');
    res.render('shop',{prods:products,pageTitle:'Shop',path:'/',hasproduct:products.length > 0,productCSS:true,shopActive:true});
 }
