/* function showPwdWin will show the Password Rule window */
function showPwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin");
	var scrnOverlay = document.getElementById("scrnoverlay");

	pwdHelpWin.style.display = "block";
	scrnOverlay.style.visibility = "visible";
}

/* function hidePwdWin will hide the Password Rule window */
function hidePwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin");
	var scrnOverlay = document.getElementById("scrnoverlay");

	pwdHelpWin.style.display = "none";
	scrnOverlay.style.visibility = "hidden";
}

/* link functions to appropriate events of corresponding HTML elements*/
function init () {
    /* link the variables to the HTML elements */
	var pwdHelpBtn = document.getElementById("pwdHelpBtn");
	var pwdHelpClose = document.getElementById("pwdHelpClose");

	pwdHelpBtn.onclick = showPwdWin;
    pwdHelpClose.onclick = hidePwdWin;
}

/* execute the initialisation function once the window*/
window.onload = init;
