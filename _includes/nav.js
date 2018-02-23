function getNavButtonLinks(event) {
	var menuItems = document.getElementsByClassName("menu-item");
	
	var prevSectionUrl = menuItems[0].getElementsByTagName("a")[0].href;
	var nextSectionUrl = menuItems[menuItems.length - 1].getElementsByTagName("a")[0].href;
	
	
	for (var i = 0; i < menuItems.length; ++i) {
		var link = menuItems[i].getElementsByTagName("a")[0].href;
		
		if (link == window.location.href) {
			if (i > 0) {
				prevSectionUrl = menuItems[i-1].getElementsByTagName("a")[0].href;
			}
			if (i+1 < menuItems.length) {
				nextSectionUrl = menuItems[i+1].getElementsByTagName("a")[0].href;
			}
			break;	
		}
	}

	var elem = document.getElementById("prev-button").getElementsByTagName("a")[0];
	elem.href = prevSectionUrl;

	elem = document.getElementById("next-button").getElementsByTagName("a")[0];
	elem.href = nextSectionUrl;
}

if (window.attachEvent) {window.attachEvent('onload', getNavButtonLinks);}
else if (window.addEventListener) {window.addEventListener('load', getNavButtonLinks, false);}
else {document.addEventListener('load', getNavButtonLinks, false);} 
