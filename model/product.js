// const products=[];
const fs=require('fs');
const path=require('path');
const rootDir=require('../util/path');
module.exports= class Product{
 constructor(t) {
     this.title=t;
 }  
//  "save" is a special function,without a function,it is automatically saved
// it will we called on current object
 save(){
    //  products.push(this);
    // creating a file
    // to write a data into the file we have to specify the path
    // const p=path.join(rootDir,'data','products.json');
    const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
// ['a''aa']
// ['a','aa','aaa']

    // fs.createReadStream
    // for large files we will not read the file i.e not putting the file in the memory .hence we will read the stream
    fs.readFile(p,(err,fileContent)=>{
        console.log(fileContent);
        let products=[];
        if(!err){
// "json" it will write json into javascript
            products=JSON.parse(fileContent);          
        }
         products.push(this);
         fs.writeFile(p,JSON.stringify(products),(err)=>{
            //  string file taken json file and convert into javascript
        //  console.log(err);
         });
    });
    
 
 }

// "fetchAll" it is a utility function,this is not called single instance of the products bez it has to give out all the product .and we r not creating new objects
static fetchAll(cb){
    // console.log(this);
//   return products;
     const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
     fs.readFile(p,(err,fileContent)=>{
         if(err){
         cb([]);
         }
         cb(JSON.parse(fileContent));
     });
}
}