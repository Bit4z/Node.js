const http= require('http')
http.createServer((req,res)=>

{
	res.write("I am a createServer this is not my fault changes")
	res.end();
}).listen(8080);
console.log("hello bro server is listening..")