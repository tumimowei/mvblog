var http = require("http");//����httpģ��
	http.createServer(function(req,res){//����������
		console.log("today is beautiful");
		
		
		res.end("hello nodejs");
	}).listen(4000);//�����˿ں�