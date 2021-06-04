var  arr=[10,20,30,40,50,60,70,80,15,13,53];
var _=require('underscore');
var newArr=_.filter(arr,function(item){return item%2==0});
