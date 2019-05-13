'use strict'

var cars = ["littleshi.cn", "Hongyu", "MacroUniverse"];
var text = "";
var i;
for (i = 0; i < cars.length; ++i) {
	text += cars[i] + "<br>";
	console.log(text);
}

document.write(text);
