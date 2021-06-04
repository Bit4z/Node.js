var arr=[10,12,15,18,19,21,26]
console.log(arr)
var _=require('underscore')
var newArr=_.filter(arr,function(item){return item%2==0})
console.log("this is the even:",newArr)