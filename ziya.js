
function msg(n,m)
{
	var c=n+m;
console.log("welcome ziya");
console.log("sum is:",+c);
}
var a=10;
var b=20;
msg(a,b);
mul=function()
{
	console.log("this is the corrrect multiply functipon");
}
mul();
sub=(n,m)=>{
	console.log("the subtractor is:",n-m);

}
sub(12,7);

function show()
{
	setTimeout(()=>{
		console.log("welcome here");},2000);
	
}
show();
var obTimer;
function show2()
{
obTimer=	setTimeout(()=>{
		console.log("this is the second qoate");},2000);

	
}
clearTimeout(obTimer);
console.log("End here");
show2();

function showInterval()
{var i=1;
	var obNormal=setInterval(
		()=>{if(i==2){clearInterval(obNormal);}console.log("welcome",i);
		i++;},2000);


		
	
}

showInterval();



