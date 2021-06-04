const fs=require("fs");


/*fs.writeFile("abc.txt","Hello ziya you are greate",function(err){
	console.log(err);

})
*/
/*


fs.writeFile("abc.txt","Hello guys I am ziyaulhaq Khan",(err)=>
{
	console.log(err)
})

console.log("file is created");

*/
/*
fs.appendFile("abc.txt","This function will append data",(err)=>{
	if(err)
		{
			console.log("ERROR in append file");
		}
		else{
			console.log("Data is append");
		}
})
*/



/*
fs.unlink("abc.txt",(err)=>
{
	if(err)
		console.log("Error is deleting file"+err)
	else
	{
		console.log("File deleted succesfully")
	}
})
*/




/*
fs.open("abc.txt","w",(err,file)=>
{
	if(err)
	{
		console.log("Error in openedFile"+err)
	}
	else{
		console.log("file open succesfully");
	}
})
*/

/*
fs.writeFile("abc.txt","Hello guys focus on your career",(err)=>
{
	if(err)
		console.log("Error:"+err);
	else
		console.log("File created succesfully");
})
fs.readFile("abc.txt","utf8",function(err,data)
{
	if(err)
console.log("ERROR"+err)
else
console.log(data)

})



fs.open("abc.txt","w",(err,file)=>
{
	if(err)
	{
		console.log("Error in openedFile"+err)
	}
	else{
		console.log("file open succesfully");
	}
})
*/

/*
fs.rename("abc.txt","abc1.txt",(err)=>
{if(err)
	console.log("Error rename is"+err)
	else
		console.log("file rename succesfully")
})
*/

/*
fs.mkdir("fsModule2",(err)=>{
	if(err)
		console.log("Error creating Directory"+err)
	else
		console.log("Directory creating succesfully")
})

*/

/*
fs.rmdir("fsModule2",(err)=>
{
	if(err)
		console.log("Error is"+err)
	else
		console.log("Directory Remove succesfully")
})
*/

/*
var myStream=fs.createReadStream("abc1.txt","utf8")
myStream.on("data",(chunk)=>{
	console.log(chunk)
})
*/


var files=fs.readdirSync('.')
console.log(files)

fs.readdir("./",(e,data)=>{
	if(e)
		console.log(e)
	else
		console.log("data is"+data)
})




