var mongodb = require("mongodb");//����mongodbģ��
var mongoClient = mongodb.MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/mation";

function insertData(db,callback){
	//��ȡҪ���������ݼ���
	var collection = db.collection("testOne");
	//Ҫ���������
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