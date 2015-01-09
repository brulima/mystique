var validar = function (form) {
	var err = document.getElementById("error"),
		cmp = "";
	if (!form.campo1.value) cmp += "Campo 1 ";
	if (!form.campo3.value) cmp += "Campo 3 ";
	if (!form.campo4.value) cmp += "Campo 4 ";

	if (cmp) {
		var msg = "Os campos " + cmp + "estão com problema";
		err.innerHTML = "<p>" + msg + "</p>";
		return false;
	}

	return true;
}