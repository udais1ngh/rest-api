const express=require("express");
const errorMiddleWare=require("./midleware/error")
const app=express();
app.use(express.json())
//route imports
const product=require("./route/productroute");

app.use("/api/v1",product);

//middleware for error
app.use(errorMiddleWare);

module.exports=app;
