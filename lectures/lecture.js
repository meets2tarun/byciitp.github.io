				
var plays;
var playing;

var RAMAYANA_LOADED = false;

var setListeners = function() {
		plays = document.getElementsByClassName("plays");
		
		var d = new Date();
		var start = d.getTime();
		var time = start;

		while (RAMAYANA_LOADED == false && time - start <= 2000) {
			time = d.getTime();
		};

		var player = document.getElementById("audio_player");
		console.log(plays[0]);
		for(var i = 0; i < plays.length; ++i) {
			plays[i].addEventListener("click", function() {
				if(playing == null || playing.id != this.id)
				{
					player.pause();
					player.src = "https://raw.githubusercontent.com/byciitp/audios/master/" + this.id;
					this.classList.add("active");
					if (playing)
						playing.classList.remove("active");
					playing = this;
					player.play();
				}
			});
		};
	};

function loadFiles() {
	$("#header").load("../templates/header.html"), 
	$("#ramayana").load("../templates/ramayana.html", function() {
		RAMAYANA_LOADED = true;
	}),
	$("#vaishnav_songs").load("../templates/vaishnav_songs.html", setListeners)
};

loadFiles();