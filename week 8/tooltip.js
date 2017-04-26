function showTip () {
    var sidTip = document.getElementById("sidTip");
    sidTip.style.display = "inline";
}

function hideTip () {
    var sidTip = document.getElementById("sidTip");
    sidTip.style.display = "none";
}

function init () {
    var sid = document.getElementById("sid");

    sid.onmouseover = showTip;
    sid.onmouseout = hideTip;
    sid.onfocus = showTip;
    sid.onblur = hideTip;
}

window.onload = init;
