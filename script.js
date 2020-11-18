const hexNos = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hexButton");
const bodyBg = document.querySelector("body");
const hex = document.querySelector(".hex");

hexBtn.addEventListener('click', getRandHex);

function getRandHex() {
	var hexCol = "#";

	for (var i = 0; i < 6; i++){
		var random = Math.floor(Math.random() * hexNos.length);
		console.log(random);

		hexCol += hexNos[random];
		console.log(hexCol);
	}

	bodyBg.style.backgroundColor = hexCol;
	hex.innerHTML = hexCol;
}
