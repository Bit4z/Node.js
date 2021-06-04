const express=require("express")
const app=express();
const morgan=require("morgan");

const postRoutes=require("./routes/post")
app.use(morgan("dev"));
app.use("/",getPosts);
const port=8080;
app.listen(port,()=>{
	console.log('A node js api is listening port: ${port} ');
});
