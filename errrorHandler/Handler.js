const fs=require('fs')
fs.writeFile("india.txt","hello guys i am from error handler",(err)=>{
	if(err)
	console.log("error"+err)
	else
	console.log("created file successfully")
})
const ErrorHandler=(err)=>{
	console.log("Error"+err)
}
const DataHandler=(data)=>{
	console.log(data)
}
fs.readFile("india.txt","utf8",(err,data)=>{
	if(err)
	{
	ErrrorHandler(err)
	}
	else
	{
	DataHandler(data)
	}
})