const products=[];
module.exports= class Product{
 constructor(t) {
     this.title=t;
 }  
//  "save" is a special function,without a function,it is automatically saved
// it will we called on current object
 save(){
     products.push(this);
 }

// "fetchAll" it is a utility function,this is not called single instance of the products bez it has to give out all the product .and we r not creating new objects
static fetchAll(){
    console.log(this);
  return products;
}
}