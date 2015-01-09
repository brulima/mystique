var keysPushed = [], 
	konami = "38,38,40,40,37,39,37,39,66,65", 
	isKonami = false;

document.addEventListener("keydown", function(key){
	keysPushed.push(key.keyCode);
	if (keysPushed.toString().indexOf(konami) >= 0) {
		keysPushed = [];

		if (!isKonami) {
			document.getElementById("mystique").id = "konami";
			isKonami = true;
		} else {
			document.getElementById("konami").id = "mystique";
			isKonami = false;
		}
	}
});