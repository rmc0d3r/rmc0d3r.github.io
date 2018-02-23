window.onclick = function menuLoseFocus(event) {
  var elem = document.getElementsByClassName("menu-div")[0];
  if (!elem.contains(event.target)) {
      elem.getElementsByClassName("menu-list")[0].style.display = "none";
  }
};

function buttonClick() {
	var elem = document.getElementsByClassName("menu-list")[0];
	if (elem.style.display != "block") {
	    elem.style.display = "block";
	}
  	else {
    	elem.style.display = "none";
  	}
}	

