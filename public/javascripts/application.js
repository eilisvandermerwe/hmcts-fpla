/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

$("a.govuk-back-link").click(function() {
    return false;
});

$("a.govuk-back-link").click(function(){
  parent.history.back();
  return false;
});

$(function(){

$("table td").click(function(){
    event.preventDefault();
        var tab = $(this).parent().attr("data-tab");
        $('.details-content').hide();
        $('#' + tab).show();
    });
});

$('#history-row-click tr').on('click', function(){
    $('#history-row-click tr').removeClass('active');
    $(this).addClass('active');
});

function showHearingOne() {
   document.getElementById('welcomeDiv').style.display = "block";
}

function hideHearingOne() {
   document.getElementById('welcomeDiv').style.display = "none";
}

function showHearingTwo() {
   document.getElementById('second-hearing').style.display = "block";
}

function hideHearingTwo() {
   document.getElementById('second-hearing').style.display = "none";
}

$(document).ready(function() {
    $('#mycheckbox').change(function() {
        $('#mycheckboxdiv').toggle();
    });
});
