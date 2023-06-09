const Product=require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../midleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

//create product--admin
exports.createProduct= catchAsyncErrors(async(req,res,next)=>{
    const product= await Product.create(req.body);
res.status(201).json({
    success:true,
    product
});


});

//get all products
exports.getAllproducts=catchAsyncErrors(async(req,res)=>{

   const apiFeature=new  ApiFeatures(Product.find(),req.query)
    const products=await Product.find()
    res.status(200).json({
        success:true,
        products
    })
})
//get product details
exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product
    })
})





//update product---admin
exports.updateProduct=catchAsyncErrors(async(req,res)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    })
})
    
   //delete a product
   exports.deleteProduct=catchAsyncErrors(async(req,res,next)=>{
    const product= await Product.findByIdAndDelete(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }
    //await product.remove();
    res.status(200).json({
        success:true,
message:"product deleted succesfully"
        
    })
   })