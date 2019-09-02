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

$("button.govuk-button--secondary").click(function() {
    return false;
});

$("button.govuk-button--secondary").click(function(){
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

function showHearingThree() {
   document.getElementById('third-hearing').style.display = "block";
}

function hideHearingThree() {
   document.getElementById('third-hearing').style.display = "none";
}

function showHearingFour() {
   document.getElementById('fourth-hearing').style.display = "block";
}

function hideHearingFour() {
   document.getElementById('third-hearing').style.display = "none";
}

$(document).ready(function() {
    $('#mycheckbox').change(function() {
        $('#mycheckboxdiv').toggle();
    });
});

$(document).ready(function() {
    $('#mycheckbox-2').change(function() {
        $('#mycheckboxdiv-2').toggle();
    });
});


$(document).ready(function() {
    $('#Interpreter-checkbox').change(function() {
        $('#Interpreter-div').toggle();
    });
});

$(document).ready(function() {
    $('#welsh-checkbox').change(function() {
        $('#welsh-div').toggle();
    });
});

$(document).ready(function() {
    $('#intermediary-checkbox').change(function() {
        $('#intermediary-div').toggle();
    });
});

$(document).ready(function() {
    $('#disability-checkbox').change(function() {
        $('#disability-div').toggle();
    });
});

$(document).ready(function() {
    $('#security-checkbox').change(function() {
        $('#security-div').toggle();
    });
});


$(document).ready(function() {
    $('#mycheckbox-2').change(function() {
        $('#mycheckboxdiv-2').toggle();
    });
});

$(document).ready(function() {
    $('#mycheckbox-3').change(function() {
        $('#mycheckboxdiv-3').toggle();
    });
});


$(document).ready(function() {
    $('#Interpreter-checkbox-2').change(function() {
        $('#Interpreter-div-2').toggle();
    });
});

$(document).ready(function() {
    $('#welsh-checkbox-2').change(function() {
        $('#welsh-div-2').toggle();
    });
});

$(document).ready(function() {
    $('#intermediary-checkbox-2').change(function() {
        $('#intermediary-div-2').toggle();
    });
});

$(document).ready(function() {
    $('#disability-checkbox-2').change(function() {
        $('#disability-div-2').toggle();
    });
});

$(document).ready(function() {
    $('#security-checkbox-2').change(function() {
        $('#security-div-2').toggle();
    });
});




$(document).ready(function() {
    $('#hide-checkbox').change(function() {
        $('#hide-div').toggle();
    });
});

$(document).ready(function() {
    $('#hide-checkbox-2').change(function() {
        $('#hide-div-2').toggle();
    });
});


function hideDirectionOne() {
   document.getElementById('direction-1').style.display = "none";
}

function hideDirectionTwo() {
   document.getElementById('direction-2').style.display = "none";
}

function hideDirectionThree() {
   document.getElementById('direction-3').style.display = "none";
}

function hideDirectionFour() {
   document.getElementById('direction-4').style.display = "none";
}

function hideDirectionFive() {
   document.getElementById('direction-5').style.display = "none";
}

function hideDirectionSix() {
   document.getElementById('direction-6').style.display = "none";
}

function hideDirectionSeven() {
   document.getElementById('direction-7').style.display = "none";
}

function hideDirectionEight() {
   document.getElementById('direction-8').style.display = "none";
}
