
var Mongodb = require("mongodb");
var MongoClient = Mongodb.MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/person";


//查找方法
var findData = function(db,callback){
	//连接到集合
	var collection = db.collection("testOne");
	//查询条件
	var wherestr = {"name":"wangjiwei"};
	var str = {"name":"aaaaaaa"};
	collection.find(wherestr).toArray(function(err,result){
		if(err){
			throw err;
		}
		callback(result);
	})
	
}

//连接数据库
MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("数据库连接成功");
	findData(db,function(result){
		console.log(result);
		db.close();
	});
	
	
	
})









