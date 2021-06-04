const express=require('express')
const aop=express();
const morgan=require('morgan')
const myOwnMiddleware=()=>{
	console.log("middleware applide!..")
}
aop.use(morgan("dev"));
aop.use(myOwnMiddleware);
aop.get("/",(req, res)=>
{
res.send("Hey this is from express and here i have made some changes");	
});
port=8080;
aop.listen(port,()=>{
	console.log("Anode js api is listening port :${port}")});