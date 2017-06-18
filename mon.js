/* var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;
//���ݿ�����ӵ�ַ
var DB_CONN_STR = "mongodb://localhost:27017/person";
var insertData = function(db, callback) {  
    //���ӵ��� testOne
    var collection = db.collection('testOne');
    //��������
    var data = [{"name":"manman","url":"www.baidu.com"},{"name":"lingling","url":"www.google.com"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}

//�������ݿ�
mongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("���ӵ����ݿ���");
	insertData(db,function(result){
		console.log(result);
        db.close();
	})
	
	
}) */


var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var db_conn = "mongodb://localhost:27017/person";

var findData = function(db,callback){
	var collection = db.collection("testOne");
	var wherestr = {"name":"manman"};
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
})






















