var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var util = require("util");
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var db_conn = "mongodb://localhost:27017/person";
var webs = [];

function insertData(db,callback){
	var collection = db.collection("testOne");
	collection.insert(webs,function(err,result){
		callback(result);
	})
};
var app = http.createServer(function(req,res){
	var postData=""; 
	//console.log("hello node.js");
	//req.method
	//req.url
	if(req.method ==="GET"){
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
			
			case "/find.html":
			fs.readFile("find.html",function(err,data){
				if(err) throw err;
				res.writeHeader("200",{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
			
			case "/remove.html":
			fs.readFile("remove.html",function(err,data){
				if(err) throw err;
				res.writeHeader("200",{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
			
			case "/edit.html":
			fs.readFile("edit.html",function(err,data){
				if(err) throw err;
				res.writeHeader("200",{"Content-Type":"text/html"});
				res.write(data.toString());
				res.end();
			})
			break;
			
			
		}
	}else if(req.method ==="POST"){
		switch(req.url){
			case "/add.js":
			req.on("data",function(chunck){
				postData += chunck;
			});
			req.on("end",function(){
				
				var website = qs.parse(postData)
				//res.end(util.inspect(website));
				webs.push(website);
				console.log(webs);
				res.end();
				//webs是后台获取的数据
				mongoClient.connect(db_conn,function(err,db){
					//if(err) throw err;
					console.log("success mongodb");
					insertData(db,function(result){
						console.log(result);
						db.close();
					})
					
				})
	
			})
			
			break;
		}
	}
}).listen(8080);