var http = require("http");
var fs = require("fs");
var app = http.createServer(function(req,res){
	var postData = "";
	console.log(req.method);
	console.log(req.url);
	if(req.method === "GET"){
		switch(req.url){
			case "/index.html":
			fs.readFile("index.html",function(err,data){
				if(err) throw err;
				res.writeHeader(200,{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
			
			case "/add.html":
			fs.readFile("add.html",function(err,data){
				if(err) throw err;
				res.writeHeader(200,{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
		}
	}else if(req.method ==="POST"){
		switch(req.url){
			case "/add.js":
			req.on("data",function(chunck){
				postData +=chunck;
			});
			req.on("end",function(){
				res.write(postData);
				res.end();
			})
			break;
		}
	
	}
}).listen(3030);