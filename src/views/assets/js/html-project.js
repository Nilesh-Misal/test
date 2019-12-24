$('.nav ._child').click(function () {
    $('.nav ._child').removeClass('active');
    $(this).addClass('active');
});

$('.nav ._child').focusout(function () {
    $('.nav ._child').removeClass('active');
    // $('.dropdown-submenu .dropdown-menu').css('display', 'none');
});

window.resizeTo(window.screen.width, window.screen.height);

$('.dropdown-submenu a.test').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
});

window.resizeTo(window.screen.width, window.screen.height);

$("div[data-asid=directory-panel]").resizable({
	// alsoResize: "div[data-asid=work-panel]",
    resize: function(event, ui){
        // if ((ui.size.width) < ((window.screen.width)/2)) {
        // 	$('#mail_list_info').css('display', 'none');
        // 	$('#mail_list_paginate').removeClass('col-md-1').addClass('col-md-6').css('width', '28%');
        // } else {
        // 	$('#mail_list_info').css('display', 'block');
        // 	$('#mail_list_paginate').removeClass('col-md-6').addClass('col-md-1').css('width', '8%');
        // }
    }
});

$("div[data-asid=editor-panel]").resizable();
$("#work-space").resizable();

var toggler = document.getElementsByClassName("fld");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".chld").classList.toggle("active");
    this.classList.toggle("fld-down");
  });
}

$('.fld').click(function () {
    $(this).prev().toggleClass('rotate');
});

$("label[action-field=project-close]").click(function () {
  var tabId = $(this).parent().attr("data-target");
  var prevTab = $(this).parent().parent().prev().children().attr('data-target');
  if ($('#tab-layout li').length == 1) {
     $('div[data-asid=no-project]').show();
     $('#tab-layout').hide();
  } else if (prevTab != 'undefined') {
     $(this).parent().parent().remove();
     $(tabId).remove();
     $('a[data-target="' + prevTab + '"]').parent().addClass('active');
     $(prevTab).addClass('active');
  }
});

$(document).ready(function() {
    $('.work-space, .property-space').css('min-height', (window.screen.height - 287) + 'px');

    $('.summernote').summernote({
        callbacks: {
            onInit: function() {
                $('.summernote').summernote('codeview.activate');
                $("div.note-toolbar, .note-status-output, .note-statusbar, .modal, .note-dropzone").remove();
            }
        },
        disableDragAndDrop: true,
        height: '' + (window.screen.height - 285) + '',   //set editable area's height
        codemirror: { // codemirror options
            theme: 'monokai'
        }
    });

    $('a[action-field=menuBtn-start-new]').click(function () {
        var shiftID = $(this).attr('data-asid');
        window.open(shiftID + '.html', 'HTML', '');
    });

   // function OpenNewProject() {
        
   //  } 
});

$(document).on('click', 'a[href="#design"]', function () {
  $('#work-space').html($('#code-space').summernote('code'));
});