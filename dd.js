var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var util = require("util"); 
http.createServer(function(req,res){
var postData = "";
	if(req.method === "GET"){
		switch (req.url){
			case "/index.html":
			fs.readFile("index.html",function(err,data){
				if(err){
					throw err;
				}
				res.writeHeader(200,{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
			case "/add.html":
			fs.readFile("add.html",function(err,data){
				if(err){
					throw err;
				}
				res.writeHeader(200,{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
		}
	}
	
	if(req.method === "POST"){
		switch(req.url){
			case "/add.js":	
			req.on("data",function(chunck){
				postData += chunck;
			});
			req.on("end",function(){
				console.log(postData);
				postData = qs.parse(postData);
				res.end(util.inspect(postData));
			})
			break;
		}
	}
}).listen(3000);