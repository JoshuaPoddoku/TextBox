
$('.clickMe').click(function () {
    "use strict";
    $(this).hide();
    $('#' + $(this).attr('for'))
                    .val($(this).text())
                    .toggleClass("form-control")
                    .show()
                    .focus();
});

$('.blur').blur(function () {
    "use strict";
    $(this)
        .hide()
        .toggleClass("form-control");
    var myid = (this).id;
    $('span[for=' + myid + ']')
        .text($(this).val())
        .show();
});