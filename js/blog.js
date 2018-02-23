---
title: blog.js
---
{% include nav.js %}
{% include menu.js %}

window.onresize = function (event) {
	var x = document.getElementById("tagline");
	var y = document.getElementById("content");
	var l = (x.offsetHeight + 10).toString() + "px";
	y.style.marginBottom = l;
};


