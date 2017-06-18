var mongodb = require("mongodb");//引入mongodb模块
var mongoClient = mongodb.MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/mation";

function insertData(db,callback){
	//获取要操作的数据集合
	var collection = db.collection("testOne");
	//要插入的数据
	var str = {"name":"xiaonezha"};
	collection.insert(str,function(err,result){
		if(err) throw err;
		callback(result);
	})
}

mongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("success");
	if(err) throw err;
	insertData(db,function(result){
		console.log(result);
		db.close();
	});
})