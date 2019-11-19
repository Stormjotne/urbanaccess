//Resize text 100%/standard

// Press enter to play when playbutton is selected
	document.addEventListener('keydown', function() {
		if(document.getElementById('hundredText') === document.activeElement) {
			if(event.keyCode === 13) {
				resizeTextOneHundred()
			}
		}
		else if(document.getElementById('hundredFiftyText') === document.activeElement) {
			if(event.keyCode === 13) {
				resizeTextOneFifty()
			}
		}
		else if(document.getElementById('twoHundredText') === document.activeElement) {
			if(event.keyCode === 13) {
				resizeTextTwoHundred()
			}
		}
	});
	
function resizeTextOneHundred() {
    if (document.body.style.fontSize === "1.5em") {
        document.body.style.fontSize = "1.0em";
		document.body.style.lineHeight = "1.5em";
    } else if (document.body.style.fontSize === "2.0em") { 
        document.body.style.fontSize = "1.0em";
		document.body.style.lineHeight = "1.5em";
    } else {
        document.body.style.fontSize = "1.0em";
		document.body.style.lineHeight = "1.5em";
    }
}


//Resize text 150%
function resizeTextOneFifty() {
    if (document.body.style.fontSize === "1.0em") {
        document.body.style.fontSize = "1.5em";
		document.body.style.lineHeight = "2.0em";
    } else if (document.body.style.fontSize === "2.0em") { 
        document.body.style.fontSize = "1.5em";
		document.body.style.lineHeight = "2.0em";
    } else {
        document.body.style.fontSize = "1.5em";
		document.body.style.lineHeight = "2.0em";
    }
}

//Resize text 200%
function resizeTextTwoHundred() {
    if (document.body.style.fontSize === "1.5em") {
        document.body.style.fontSize = "2.0em";
		document.body.style.lineHeight = "2.5em";
    } else if (document.body.style.fontSize === "1.0em") { 
        document.body.style.fontSize = "2.0em";
		document.body.style.lineHeight = "2.5em";
    } else {
        document.body.style.fontSize = "2.0em";
		document.body.style.lineHeight = "2.5em";
    }
}