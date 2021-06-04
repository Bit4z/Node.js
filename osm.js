const os=require('os');
var type=os.type();
var hostname=os.hostname();
console.log("type of os:",os);
console.log("hostname is:",hostname);
console.log(os.release());
console.log(os.userInfo());
console.log(os.version());
console.log(os.totalmem());


/*
var myKey=12345;
mpodule.export.key=myKey;
*/
