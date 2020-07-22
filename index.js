$(document).ready( function () {
	$(".slick-items").slick({
		dots: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 1000,
		infinit: true,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		}
		]
	});
});
				
var plays;
var playing;

var RAMAYANA_LOADED = false;

var setListeners = function() {
		plays = document.getElementsByClassName("plays");
		
		var start = Date.now();
		var time = start;

		while (RAMAYANA_LOADED == false && time - start <= 2000) {
			time = Date.now();
		};

		var player = document.getElementById("audio_player");
		// console.log(plays[0]);
		for(var i = 0; i < plays.length; ++i) {
			plays[i].addEventListener("click", function() {
				if(playing == null || playing.id != this.id)
				{
					player.pause();
					player.src = this.id;
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
	$("#header").load("templates/header.html"),
	$("#footer").load("templates/footer.html"), 
	$("#ramayana").load("templates/ramayana.html", function() {
		RAMAYANA_LOADED = true;
	}),
	$("#vaishnav_songs").load("templates/vaishnav_songs.html", setListeners)
};

loadFiles();
