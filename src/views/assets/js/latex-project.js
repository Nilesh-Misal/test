$('.nav ._child').click(function () {
    $('.nav ._child').removeClass('active');
    $(this).addClass('active');
});

$('.nav ._child').focusout(function () {
    $('.nav ._child').removeClass('active');
});

window.resizeTo(window.screen.width, window.screen.height);

$('.dropdown-submenu a').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
});

var toggler = document.getElementsByClassName("fld");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".chld").classList.toggle("active");
        this.classList.toggle("fld-down");
    });
}
$('.fld').click(function() {
    $(this).prev().toggleClass('rotate');
});

$("label[action-field=project-close]").click(function() {
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

$("#work-space").resizable();
$(document).ready(function() {
    $('#code-space').summernote();
});

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


