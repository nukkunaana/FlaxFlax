$(document).ready(function(){
    // Возможность выбирать select, через кастомеризированную стрелку.
	var arrowName=$(".select-arrow");
	arrowName.click(function() {
		var closestSelect = $(this).parent().find("select");
        open(closestSelect);
    });


});

function open(elem) {
    if (document.createEvent) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onmousedown");
    }
}