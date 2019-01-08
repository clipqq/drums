for (var i = document.querySelectorAll(".drum").length - 1; i >= 0; i--) {
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick(event));
}

function handleClick(event) {
	//alert("I got clicked")
	// var crash = new Audio("sounds/crash.mp3");
	// crash.play();
	//this.style.color = "white";
	var buttonKey = this.innerHTML;
	var eventKey = event;
	
	switch (buttonKey) {
		case "w":
			var bass = new Audio("sounds/kick-bass.mp3");
			bass.play();
			break;
		case "a":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "s":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "d":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "j":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "k":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;	
		case "l":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
	}
}

document.addEventListener("keypress", function(event) {

	alert(event.key + " Key was pressed!")
})