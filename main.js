let result_block = document.getElementById("result-block-div");

function converterStart(x, data) {
	let strBase;
	if (x == 1) strBase = data.toUpperCase().split("").join("");
	else if (x == 2) strBase = data.toLowerCase().split("").join("");
	else if (x == 3) {
		strBase = data.toLowerCase().split("");
		strBase[0] = strBase[0].toUpperCase();
		for (i = 0; i < strBase.length; i++) {
			if (strBase[i] == " ") strBase[i + 1] = strBase[i + 1].toUpperCase();
		}
		strBase = strBase.join("");
	} else if (x == 4) {
		strBase = data.toLowerCase().split("");
		strBase[0] = strBase[0].toUpperCase();
		strBase = strBase.join("");
	} else if (x == 5) {
		strBase = data.split("");
		for (i = 0; i < strBase.length; i++) {
			if (strBase[i] == strBase[i].toUpperCase()) strBase[i] = strBase[i].toLowerCase();
			else if (strBase[i] == strBase[i].toLowerCase()) strBase[i] = strBase[i].toUpperCase();
		}
		strBase = strBase.join("");
	}
	result_block.innerHTML = strBase;
}

document.getElementById('txt-input').addEventListener('input', function(e) {
	let data = document.getElementById('txt-input').value;

	if (data.length == 0) result_block.innerHTML = "Вы ничего не ввели :(";
	else {
		if (document.getElementById("inp-1").checked) converterStart(1, data);
		else if (document.getElementById("inp-2").checked) converterStart(2, data);
		else if (document.getElementById("inp-3").checked) converterStart(3, data);
		else if (document.getElementById("inp-4").checked) converterStart(4, data);
		else if (document.getElementById("inp-5").checked) converterStart(5, data);
	}
});
