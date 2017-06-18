var fs = require("fs");
fs.readFile("pc.html","utf-8",function(err,data){
	if(err){
		console.log("cula");
	}else {
		console.log(data);
	}
})