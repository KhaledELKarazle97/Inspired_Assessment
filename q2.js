function round (x) {
	//logic to round parameter to nearest 9th unit number
if(x.toString()[x.toString().length - 1] >= '5'){
  x = Math.ceil(x/9)*9;
}else{
  x = Math.ceil(x/9)*9 - 10;
}
console.log(x);

}
