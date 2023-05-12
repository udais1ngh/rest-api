const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")
//handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
    process.exit(1);
})

//config
dotenv.config({path:"backend/config/config.env"})
//connecting to database
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})


//unhandled promise rejection
//used when mongdb connectin link in env file is wrong

// process.on("unhandledRejection",(err)=>{
//     console.log(`Error:${err.message}`);
//     console.log(`shutting down the server due to unhandled promise rejection`);
//     server.close(()=>{
//         process.exit(i);
//     });
// });