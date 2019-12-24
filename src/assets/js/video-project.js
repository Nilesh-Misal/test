$('.nav ._child').click(function () {
    $('.nav ._child').removeClass('active');
    $(this).addClass('active');
});

$('.nav ._child').focusout(function () {
    $('.nav ._child').removeClass('active');
    // $('.dropdown-submenu .dropdown-menu').css('display', 'none');
});

window.resizeTo(window.screen.width, window.screen.height);

$('.dropdown-submenu a').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
});

$("div[data-asid=directory-panel]").resizable({
    // alsoResize: "div[data-asid=work-panel]",
    resize: function(event, ui){
        // if ((ui.size.width) < ((window.screen.width)/2)) {
        //  $('#mail_list_info').css('display', 'none');
        //  $('#mail_list_paginate').removeClass('col-md-1').addClass('col-md-6').css('width', '28%');
        // } else {
        //  $('#mail_list_info').css('display', 'block');
        //  $('#mail_list_paginate').removeClass('col-md-6').addClass('col-md-1').css('width', '8%');
        // }
    }
});

var toggler = document.getElementsByClassName("fld");

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".chld").classList.toggle("active");
        this.classList.toggle("fld-down");
    });
}
$('.fld').click(function() {
    $(this).prev().toggleClass('rotate');
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$('.w3-left').click(function() {
    $("#main").css({ 'margin-left': '20%' });
    $("#leftMenu").css({ 'width': '20%', 'display': 'block' });
    $(this).css('display', 'none');
});

$('#leftMenu-btn').click(function() {
    $("#main").css({ 'margin-left': '0%' });
    $("#leftMenu").css('display', 'none');
    $(".w3-left").css('display', 'inline-block');
});

$('.w3-right').click(function() {
    $("#main").css({ 'margin-right': '20%' });
    $("#rightMenu").css({ 'width': '20%', 'display': 'block' });
    $(this).css('display', 'none');
});

$('#rightMenu-btn').click(function() {
    $("#main").css({ 'margin-right': '0%' });
    $("#rightMenu").css('display', 'none');
    $(".w3-right").css('display', 'inline-block');
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

var myVideo = document.getElementById("video1");

function playPause(id) {

}

$('a[data-control="play-pause-btn"]').click(function() {
    if (myVideo.paused) {
        myVideo.play();
        $(this).find('i').removeClass('fa-play').addClass('fa-pause');
    } else {
        myVideo.pause();
        $(this).find('i').removeClass('fa-pause').addClass('fa-play');
    }
});

$('a[data-control="stop-btn"]').click(function() {
    myVideo.load();
    if ($('a[data-control="play-pause-btn"]').find('i').attr('class') == 'fa fa-pause') {
        $('a[data-control="play-pause-btn"]').find('i').removeClass('fa-pause').addClass('fa-play');
    }
});

function makeBig() {
    myVideo.width = 560;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}