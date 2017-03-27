var lyricsapp=(function(){
	var navList;
	var contentDiv;
	var nameHeading;
	var snameLi;
	var lyricsLi;
	
	function createHandler(song)
	{
		return function(){
			ajax.makeRequest("data/"+song.id+".json",displaySongDetails); 
		}
	}
	function displaySongDetails(song)
	{
		contentDiv.classList.remove("hide"); 
		navList.classList.add("hide"); 
		nameHeading.innerHTML=song.name;
		snameLi.innerHTML=song.sname; 
		lyricsLi.innerHTML=song.lyrics;
	}

	function populateList(thesongs)
	{
		navList=document.getElementById("nav");
		thesongs.forEach(function(song){
			var newLi=document.createElement("li"); 
			newLi.innerHTML=song.name; 
		    newLi.addEventListener("click", createHandler(song), false)
			navList.appendChild(newLi); 
		})
	}
	function backToList(){
		contentDiv.classList.add("hide"); 
		navList.classList.remove("hide"); 
	}
	function init(){
		navList=document.getElementById("nav"); 
		contentDiv=document.getElementById("content"); 
		nameHeading=document.getElementById("name"); 
		snameLi=document.getElementById("sname"); 
		lyricsLi=document.getElementById("lyrics"); 
		ajax.makeRequest("data/thesongs.json",populateList);
		backBtn=document.getElementById("backBtn"); 
		backBtn.addEventListener("click", backToList, false)
	}
	return{
		init:init
	}
})();

lyricsapp.init();



