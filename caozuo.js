/* var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var db_conn = "mongodb://localhost:27017/mation";

var findData = function(db,callback){
	var collection = db.collection("testOne");
	var wherestr = {"name":"xieao"};
	collection.find(wherestr).toArray(function(err,result){
		callback(result);
	})
}

mongoClient.connect(db_conn,function(err,db){
	console.log("success");
	if(err) throw err;
	findData(db,function(result){
		console.log(result);
		db.close();
	})
}) */

/* var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/mation";

function selectData(db,callback){
		//要查询的表
	var collection = db.collection("testOne");
	var str = {"name":"xieao"};
	collection.find(str).toArray(function(err,result){
		callback(result);
	})
}

mongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("success");
	if(err){
		throw err;
	};
	selectData(db,function(result){
		console.log(result);
	});
}) */

var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/mation";

function insertData(db,callback){
	var collection = db.collection("testOne");
	var str = {"name":"aoteman"};
	collection.insert(str,function(err,result){
		if (err) throw err;
		callback(result);
	})
}


mongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("sussess");
	if(err) throw err;
	insertData(db,function(result){
		console.log(result);
		db.close();
	});
})




















