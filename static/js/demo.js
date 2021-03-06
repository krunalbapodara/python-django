
$(document).ready(function () {
    var csrftoken = $.cookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
})


function callapi() {
    $.post({
        url: '/accounts/callapi',
        processData: false,
        success: function (data) {
            $('#clcbtn').html('success')
        },
        error: function (data) {
        }
    })
}