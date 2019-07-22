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
        $('table td').removeClass('current');
        $(this).addClass("current");
        var tab = $(this).parent().attr("data-tab");
        $('.details-content').hide();
        $('#' + tab).show();
    });
});
