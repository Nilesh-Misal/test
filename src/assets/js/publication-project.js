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

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$('.expand').click(function() {
    var currentElementType = $(this).attr('id').split('-').pop();
    if ($(this).attr('data-value') == 'more') {
        $(this).attr('data-value', 'less');
        $('.mode-' + currentElementType).html('Less');
        $('.icon-' + currentElementType).removeClass('fa-chevron-right').addClass('fa-chevron-down');
        $('#extra-' + currentElementType).slideDown('fast');

    } else {
        $(this).attr('data-value', 'more');
        $('.mode-' + currentElementType).html('More');
        $('.icon-' + currentElementType).removeClass('fa-chevron-down').addClass('fa-chevron-right');
        $('#extra-' + currentElementType).slideUp('fast');
    }
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('.arrow').click(function () {
        $('#menu-container').toggleClass('hide');
        $('#work-space-container').toggleClass('work-space-collapsed work-space-expanded');
        $('#menu-holder').toggleClass('accessible noaccessible');
        $(this).toggleClass('opened closed');
        $(".arrow i").toggleClass('fa-chevron-left fa-chevron-right');
    });
});