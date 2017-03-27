
var thelyricslist;
var lyricsfav;

function getAllLyrics() 
{
	var lyrics=[]
	lyrics.push({id:0,title:"Eminem - Not Afraid"});
	lyrics.push({id:1,title:"OneRepublic - Counting Stars"});
	
	lyrics.push({id:2,title:"Eminem - The Real Slim Shady"});
	lyrics.push({id:3,title:"Flo Rida - Low"});
	lyrics.push({id:4,title:"Rihanna - Diamonds"});
	return lyrics;
}


function getLyricsFav() 
{
	var favLyrics=[]
	if(localStorage.getItem("favLyrics")){
		favLyrics=JSON.parse(localStorage.getItem("favLyrics"));
	}
	return favLyrics;
}


function removeFromFavs(id) 
{
	return function(){
		var favLyrics = getLyricsFav();
		var indexNum = favLyrics.indexOf(id);
		if(indexNum != -1) {
			favLyrics.splice(indexNum, 1);
		}
		localStorage.setItem("favLyrics", JSON.stringify(favLyrics))
		populateList();
	}
	
}
function addToFavs(id) 
{
	return function(){
		var favLyrics = getLyricsFav();
		favLyrics.push(id)
		localStorage.setItem("favLyrics", JSON.stringify(favLyrics))
		populateList();
	}
	
}
function populateList() 
{
	var allLyrics=getAllLyrics(); 
	var favLyrics=getLyricsFav();
	thelyricslist.innerHTML="";

	allLyrics.forEach(function(lyric){
		var newLi=document.createElement("li");
		newLi.innerHTML=lyric.title+" ";
		var newSpan=document.createElement("span");
		if(favLyrics.includes(lyric.id)){ //it's one of the favourites
			newSpan.innerHTML="(Remove The Song)"
			newSpan.addEventListener("click",removeFromFavs(lyric.id),false)
		}else{
			newSpan.innerHTML="(Add Song To favourites)"
			newSpan.addEventListener("click",addToFavs(lyric.id),false)
		}
		newLi.append(newSpan)
		thelyricslist.appendChild(newLi);
	})
	showFavLyrics(); 
}
function showFavLyrics() 
{
	var allLyrics=getAllLyrics();
	var favLyrics=getLyricsFav();
	lyricsfav.innerHTML="";

	allLyrics.forEach(function(lyric){
		if(favLyrics.includes(lyric.id)){
			var newLi=document.createElement("li");
		    newLi.innerHTML=lyric.title+" ";
		    lyricsfav.appendChild(newLi);
		}
	})
}
function init()
{
	thelyricslist=document.getElementById("thelyricslist");
	lyricsfav=document.getElementById("lyricsfav");
	populateList()
}

window.addEventListener("load",init, false);


