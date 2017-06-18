var fs = require("fs");
var cheerio = require("cheerio");
var request = require('request');
//下载
function downloadFile(uri,filename,callback){
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback); 
}
//爬虫找到数组
function findName(data){
	var $=cheerio.load(data);
	var abtr = $("tr td:first-Child");
	var str = abtr.text();
	var arr = str.split(".pdf");
	arr.pop()
	console.log(arr.length);
	for(var i = 0;i<arr.length;i++){
		arr[i] += ".pdf"
	};
	return arr
}
//读取文件下载文件
fs.readFile("pc.html","utf-8",function(err,data){
	if(err){
		console.log("chucuola");
	}else {
		
		var btarr = findName(data);
		
		var filename = "";

		for(var i=0;i<btarr.length;i++){
		//http://cp.feicuiedu.com/RDMSResource/程序开发/H5前端开发/2.0/动态网页编程/基础课程/课件/
		//http://cp.feicuiedu.com/RDMSResource/程序开发/H5前端开发/2.0/动态网页编程/基础课程/课件/1402P_jquery_轮播事件_安志月.pdf
		//http://cp.feicuiedu.com/RDMSResource\程序开发\H5前端开发\2.0\动态网页编程\项目\课件\0101_jquery基础1.pdf
			
			filename = btarr[i];
			var fileUrl  = "http://cp.feicuiedu.com/RDMSResource/程序开发/H5前端开发/2.0/动态网页编程/项目/课件/";
			fileUrl  += filename;
			fileUrl = encodeURI(fileUrl);
			console.log(fileUrl);
			downloadFile(fileUrl,filename,function(){
				console.log('下载完毕');
			});
		} 
	
	}
});
