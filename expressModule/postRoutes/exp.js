const express=require('express');
const aop=express();
const postRoutes=require("./postRoutes")
app.get("/",postRoutes.getPosts);
const port=8080;
aop.listen(port,()=>{
	console.log("this is node.js ${port}:")
});
