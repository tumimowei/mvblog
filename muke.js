var http = require("http");
var url = "http://www.imooc.com/learn/348";
var cheerio = require("cheerio");
function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $(".chapter");
	var courseDate = [];
	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find("i").text();
		var videos = chapter.find(".video").children("li");
		var chapterData = {
			chapterTitle: chapterTitle,
			videos:[]
		}
		videos.each(function(){
			var video = $(this).find(".J-media-item");
		
			var videoTitle = video.text();
		
			var videoId = video.attr("href").split("video/")[1];
		
			console.log(videoId)
			chapterData.videos.push({
				title:videoTitle,
				id:videoId
			})
		})
		courseDate.push(chapterData);
	})
	
	return courseDate;
}

function printCourseInfo(courseData){
	courseData.forEach(function(item){
	var chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');
		item.videos.forEach(function(video){
			console.log(video.title + "nnn" +video.id);
		})
		
	})
}
http.get(url,function(res){
	var html = "";
	res.on("data",function(data){
		html+=data;
	});
	res.on("end",function(){
		var courseData = filterChapters(html);
		printCourseInfo(courseData);
	}) 
}).on("error",function(){
	console.log("不好意思，出错了");
})