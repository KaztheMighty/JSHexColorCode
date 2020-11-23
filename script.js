//A constant which has a list of the numbers and letters used in Hexcidemals.
//This is grabbed randomly by the below function in order to simulate a random background.
const hexNos = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hexButton");
const bodyBg = document.querySelector("body");
const hex = document.querySelector(".hex");

//Event listener to listen for when the button is pressed. When it's pressed, the function is ran.
hexBtn.addEventListener('click', getRandHex);

function getRandHex() {
	//Hexidecimals always start off with #, so we add it here 
	var hexCol = "#";

	//Hexidecimals have 6 characters so we run it 6 times. 
	for (var i = 0; i < 6; i++){
		var random = Math.floor(Math.random() * hexNos.length);
		//Console.log was only here for testing, commenting it out so it won't run during this script
		//console.log(random);

		hexCol += hexNos[random];
		//console.log(hexCol);
	}

	//Change the background to be the random colour selected from the above const. 
	bodyBg.style.backgroundColor = hexCol;
	//And change the text to be the Hexidecimal characters
	hex.innerHTML = hexCol;
}
