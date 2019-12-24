var countNum = 1;

$('.nav ._child').click(function () {
	$('.nav ._child').removeClass('active');
	$(this).addClass('active');
});

$('.nav ._child').focusout(function () {
	$('.nav ._child').removeClass('active');
});
	
$(document).ready(function () {
	var countNum = 1;
	window.resizeTo(window.screen.width, window.screen.height);

	$('.dropdown-submenu a.test').on("click", function (e) {
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});	
});

// ctrl+N action
// Creates new tab as well as same type of project too
$(document).on('keydown', function(e) {
	if (e.ctrlKey && (e.keyCode == 78)) {
		createNewProject();
	}
});	

$('a[action-field="divBtn-start-new"], a[action-field="menuBtn-start-new"]').on('click', function () {
	createNewProject();
});

function createNewProject() {
	$('div[data-asid=no-project]').hide();
	$('.nav-tabs li, .tab-pane').removeClass('active');
	$('#tab-layout').show();
	$('ul[data-asid=tab-layout]').append('<li class="active"><a data-target="#project' + countNum + '" data-toggle="tab">Project - ' + countNum + ' <label class="close closeTab" action-field="project-close">×</label></a></li>');
	$('div[data-asid=tab-contents]').append('<div class="tab-pane active" id="project' + countNum + '"></div>');
	$('#project' + countNum + '').load('social-project-platter.html');
	countNum++;
}