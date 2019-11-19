	/*Audio Player starts*/
	var player = document.getElementById('player');
	var music = document.getElementById('music');
	var playbutton = document.getElementById('playbutton');
	var nextbutton = document.getElementById('nextbutton')
	var previousbutton = document.getElementById('previousbutton')
	var duration;
	var timeline = document.getElementById('timeline');
	var timeball = document.getElementById('timeball');
	var timelineWidth = timeline.offsetWidth - timeball.offsetWidth;
	var ontimeball = false;
	
	/*Event Listeners start*/
	
	//Timeupdate
	music.addEventListener("timeupdate", timeUpdate, false);
	
	//Get Duration
	music.addEventListener("canplaythrough", function () {
		duration = music.duration;
	}, false);
	
	//Click Timeline
	timeline.addEventListener("click", function (event) {
	movetimeball(event);
	music.currentTime = duration * clickPercent(event);
	}, false);
	
	// Makes timeball draggable 
	timeball.addEventListener('mousedown', mouseDown, false);
	window.addEventListener('mouseup', mouseUp, false);
	
	// mouseDown
	function mouseDown() {
		ontimeball = true;
		window.addEventListener('mousemove', movetimeball, true);
		music.removeEventListener('timeupdate', timeUpdate, false);
	}
	
	// mouseUp
	function mouseUp(e) {
		if (ontimeball == true) {
			movetimeball(e);
			window.removeEventListener('mousemove', movetimeball, true);
			// change current time
			music.currentTime = duration * clickPercent(e);
			music.addEventListener('timeupdate', timeUpdate, false);
		}
		ontimeball = false;
	}
	
	// mousemove
	function movetimeball(e) {
		var newMargLeft = e.pageX - timeline.offsetLeft;
		if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
			timeball.style.marginLeft = newMargLeft + "px";
		}
		if (newMargLeft < 0) {
			timeball.style.marginLeft = "-10px";
		}
		if (newMargLeft > timelineWidth) {
			timeball.style.marginLeft = timelineWidth + "px";
		}
	}
	
	// Press enter to play when playbutton is selected
	document.addEventListener('keydown', function() {
		if(document.getElementById('playbutton') === document.activeElement) {
			if(event.keyCode === 13) {
				playAudio()
			}
		}
	} );
	
	/*Event Listeners ends*/
	
	/*(.77) of timelineWidth starts*/
	function clickPercent(e) {
		return (e.pageX - timeline.offsetLeft) / (timelineWidth);
	}
	/*(.77) of timelineWidth starts*/
	
	/*timeUpdate starts*/
	function timeUpdate() {
		var playPercent = timelineWidth * (music.currentTime / duration);
		timeball.style.marginLeft = playPercent + "px";
		if (music.currentTime == duration) {
			playbutton.className = "";
			playbutton.className = "play";
		}
	}
	/*timeUpdate ends*/
	/*playAudio starts*/
	function playAudio() {
		if (music.paused === false) {
			music.pause();
			playbutton.className = "";
			playbutton.className = "play";
		} else {
			music.play();
			playbutton.className = "";
			playbutton.className = "pause";
		}
	}
	/*playAudio ends*/
	/*resetAudio starts*/
	function resetAudio() {
		var music = document.getElementById('music');
			music.currentTime = 0;
	}
		
	/*resetAudio ends*/
	/*skipAudio1 starts*/
	function skipAudio1() {
		var music = document.getElementById('music');
			music.currentTime = 2;
	}
		
	/*skipAudio1 ends*/
	/*skipAudio2 starts*/
	function skipAudio2() {
		var music = document.getElementById('music');
			music.currentTime = 68;
	}
	/*skipAudio2 ends*/
	/*skipAudio3 starts*/
	function skipAudio3() {
		var music = document.getElementById('music');
			music.currentTime = 135;
	}
	/*skipAudio2 ends*/
	/*skipAudio3 starts*/
	function skipAudio4() {
		var music = document.getElementById('music');
			music.currentTime = 216;
	}
	/*skipAudio2 ends*/
	/*Audio Player ends*/