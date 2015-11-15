// Highlight current section in menu
$(document).ready(function() {
	var currentNav = $('.nav a[href="' + this.location.pathname + '"]').parent();
	currentNav.addClass('active');
    if (currentNav.parent().parent().attr('class').indexOf('dropdown') >= 0) {
    	currentNav.parent().parent().addClass('active');
    }
});