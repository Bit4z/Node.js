const express=require('express');
const aop=express();
const postRoutes=require("routes/post")
app.get("/",postRoutes.getPosts);
const port=8080;
aop.listen(port,()=>{
	console.log("this is node.js ${port}:")
});

/*
aop.get("/",(req, res)=>
{
res.send("Hey this is from express");	
});
port=8080;
aop.listen(port,()=>{
	console.log("Anode js api is listening port :${port}")});
	*/

