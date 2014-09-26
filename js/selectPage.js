$(document).ready(function(){
	// Присваивание элементу класс "selected" для его стилизации в главном меню.
	$('header nav li').each(function () {if (this.getElementsByTagName("a")[0].href == location.href) this.className = "selected";});
});
