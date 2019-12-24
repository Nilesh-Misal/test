// Load native UI library
// var gui = require('nw.gui');

// // Get the current window
// var win = gui.Window.get();
// win.maximize(true);

// menu opener
$('.nav ._child').click(function () {
	$('.nav ._child').removeClass('active');
	$(this).addClass('active');
});

$('.nav ._child').focusout(function () {
	$('.nav ._child').removeClass('active');
	// $('.dropdown-submenu .dropdown-menu').css('display', 'none');
});

$('.dropdown-submenu a.test').on("click", function (e) {
	$(this).next('ul').toggle();
	e.stopPropagation();
	e.preventDefault();
});

var scrolling = false, countNum = 1, limitNum = 1;

$('#scrollLeft').mousedown(function(){
        scrolling = true;
        startScrolling($("ul[data-asid=tab-layout]"), "-=10px");
    }).mouseup(function(){
        scrolling = false;
    });

  $('#scrollRight').on({
    'mousedown touchstart': function() {
      $(".sidebar-menu").animate({
        scrollLeft:  $(".sidebar-menu")[0].scrollRight
      }, 2000);
    },
    'mouseup touchend': function() {
      $(".sidebar-menu").stop(true);
    }
});

$(document).ready(function () {
	window.resizeTo(window.screen.width, window.screen.height);

	$('#mail_list').DataTable({
		"sDom": '<"top"fip>rt<"clear">',
		"lengthChange": false,
		"pageLength": 45,
		"scrollY": '87.5vh',
		"scrollCollapse": true,
		"paging": true,
		"pagingType": "simple",
		'language': {
			search: "",
			info: "_START_ - _END_ of _TOTAL_",
			paginate: {
				previous: '<i class="fa fa-chevron-left"></i>',
				next: '<i class="fa fa-chevron-right"></i>'
			},
			infoFiltered: "(filtered from _MAX_ mails)",
		},

		'columnDefs': [{
			'targets': 0,
			'searchable': false,
			'orderable': false,
			'className': 'dt-body-center',
			'render': function (data, type, full, meta) {
				return '<input type="checkbox" name="id[]" value="' +
					$('<div/>').text(data).html() + '">';
			}
		}]
	});

	// var deviceInnerHeight = (($(window).height()) - 119) + 'px';
	// var deviceInnerHeightForDiv = (($(window).height()) - 29) + 'px';
	$('#mail_list_div').css({
		'min-height': '-webkit-fill-available'
	});
	$('.dataTables_scrollBody').css({
		'max-height': '' + window.screen.height + ''
	});
	// $('.tab-pane').css({'min-height': '88.5vh', 'max-height': '88.5vh', 'overflow-y' : 'scroll'});

	$('[data-toggle="tooltip"]').tooltip();

	$('#mail_list_filter').addClass('col-md-6').css('padding-left', '0');
	$('#mail_list_paginate').addClass('col-md-1').css({
		'width': '8%',
		'float': 'right',
		'text-align': 'right',
		'padding': '0'
	});

	$('#mail_list_info').addClass('col-md-4').css({
		'font-size': '1.3rem',
		'text-align': 'right',
		'padding-top': '5px',
		'position': 'relative',
		'right': '0',
		'left': '10%'
	});

	$('#mail_list_next a').attr('data-toggle', 'tooltip');
	$('#mail_list_next a').attr('title', 'Older');

	$('#mail_list_filter label').css('float', 'right');

	$('.dataTables_filter input[type="search"], #mail_list_filter label').css({
		'width': '-webkit-fill-available'
	}).attr('id', 'search_field_mail');

	$('.dataTables_filter input[type="search"]').attr('placeholder', 'Search mail');

	$('#search_field_mail').keyup(function () {
		var searchText = $('#mail_list_info').text().match(/entries/gi);
		if (searchText != null && searchText.length < 1) {
			$('#mail_list_info').removeClass('col-md-5').addClass('col-md-4').css('left', '10%');
		} else {
			$('#mail_list_info').removeClass('col-md-4').addClass('col-md-5').css('left', '2%');
		}
	});
	$('#mail_list thead').hide();
	$('#mail_list tfoot').hide();

	$("#mail_list_div").resizable({
		// alsoResize: "#mail_form_div",
		resize: function (event, ui) {
			if ((ui.size.width) < ((window.screen.width) / 2)) {
				$('#mail_list_info').css('display', 'none');
				$('#mail_list_paginate').removeClass('col-md-1').addClass('col-md-6').css('width', '28%');
			} else {
				$('#mail_list_info').css('display', 'block');
				$('#mail_list_paginate').removeClass('col-md-6').addClass('col-md-1').css('width', '8%');
			}
		}
	});

	$("#mail_form_div").resizable();
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
	// if (limitNum == 11) {
	// 	alert('Unable to open more tabs. Please close one tab!');
	// } else {		
	// 	$('ul[data-asid=tab-layout]').append('<li class="active"><a data-target="#project' + countNum + '" data-toggle="tab">E-mail (' + countNum + ') <label class="close closeTab" action-field="project-close">×</label></a></li>');
	// 	$('div[data-asid=tab-contents]').append('<div class="tab-pane active" id="project' + countNum + '"></div>');
	// 	$('#project' + countNum + '').load('email-project-form.html');
	// 	limitNum++, countNum++;
	// }
	$('ul[data-asid=tab-layout]').append('<li class="active"><a data-target="#project' + countNum + '" data-toggle="tab">E-mail (' + countNum + ') <label class="close closeTab" action-field="project-close">×</label></a></li>');
	$('div[data-asid=tab-contents]').append('<div class="tab-pane active" id="project' + countNum + '"></div>');
	$('#project' + countNum + '').load('email-project-form.html');
	countNum++;
}