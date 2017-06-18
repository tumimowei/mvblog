var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var util = require("util");
var app = http.createServer(function(req,res){

res.write("hello world");
res.end("nodejsjsjsjjsjs");
/* console.log("aa");
	var postData = "";
	if(req.method === "GET"){
		switch(req.url){
			case "/index.html":
			fs.readFile("index.html",function(err,data){
				if(err) throw err;
				res.writeHeader("200",{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
			
			case "/add.html":
			fs.readFile("add.html",function(err,data){
				if(err) throw err;
				res.writeHeader("200",{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
		}
	}else if(req.method === "POST"){
	console.log("success");
		switch(req.url){
			case "/add.js":
			console.log("aaaaaaa");
			req.on("data",function(chunk){
				postData += chunk;
			});
			req.on("end",function(){
				postData = qs.parse(postData);
				res.end(util.inspect(postData));
			});
			break;
		}
	} */
}).listen(3030);