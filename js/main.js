

$(document).ready(function(){    

	var whole_icon = $('#circle');

	var enmascarado = $('#circle .enmascarado');
	var patch = $('#circle #patch');



	var tl = new TimelineMax();

	tl.to(whole_icon, 0, {opacity:1});

	tl.from(enmascarado, 1, {ease: Power2.easeOut, rotation:-220, transformOrigin: "47% 50%"});   
	tl.from(patch, 1, {ease: Power2.easeOut, rotation:-100, transformOrigin: "98% 64%"}, '-=1');            


	var whole_icon1 = $('#mobiledevices');

	var cell1 = $('#mobiledevices #cell');
	var orange1 = $('#mobiledevices #Path_3_');


	var tl1 = new TimelineMax();

	tl1.to(whole_icon1, 0, {opacity:1});

	tl1.from(cell1, 0.5, {ease: Power2.easeOut, scaleY:0, transformOrigin: "bottom center"});
	tl1.from(orange1, 0.7, {ease: Power2.easeOut, scaleY:0, transformOrigin: "bottom center"}, '-=0.1');


	var whole_icon2 = $('#USmap');

	var enmascarado2 = $('#USmap .enmascarado');



	var tl2 = new TimelineMax();

	tl2.to(whole_icon2, 0, {opacity:1});

	tl2.from(enmascarado2, 2, {ease: Power2.easeOut, y:100, transformOrigin: "bottom center"});

});
