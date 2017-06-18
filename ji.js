var fs = require("fs");
var data = "hello world  shiubsu";
/* fs.writeFile("int.txt",data,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("ok");
	}

}) */

//fs.writeFileSync("int.txt",data);

fs.stat("int.txt",function(err,stat){
	if(err){
		console.log(err);
	}else{
		console.log("isFile"+stat.isFile());
		console.log("isDirectory"+stat.isDirectory());
		if(stat.isFile()){
			console.log(stat.size);
			console.log(stat.birthtime);
			console.log(stat.mtime);
		}
	}
	

})