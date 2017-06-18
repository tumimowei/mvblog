var http = require("http");//引入http模块
	http.createServer(function(req,res){//创建服务器
		console.log("today is beautiful");
		
		
		res.end("hello nodejs");
	}).listen(4000);//监听端口号