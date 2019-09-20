$(document).ready(function() {
    jQuery.validator.addMethod("phoneUK", function(phone_number, element) {
        phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
        return this.optional(element) || phone_number.length > 9 && phone_number.length < 12 && phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Vui lòng nhập đúng số điện thoại");
    $(".form").validate({
        rules: {
            "entry.607228889": {
                required: true,
            },
            "entry.347180062": {
                required: true,
                phoneUK: true
            },
            'entry.1375519652': {
                required: true,
            },
            'entry.1521458336': {
                required: true,
            },
        },
        messages: {
            "entry.607228889": {
                required: "* Vui lòng nhập họ tên",
            },
            "entry.347180062": {
                required: "* Vui lòng nhập số điện thoại",
            },
            'entry.1375519652': {
                required: "* Vui lòng nhập link Facebook cá nhân",
            },
            'entry.1521458336': {
                required: "* Vui lòng nhập link Video Livestream",
            },
        },
        submitHandler: function(form) {
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSclV5sTVW2TK7oVNGCYe39bXc7DQGlSK-wFSi9qnTSzoe_coA/formResponse",
                data: $(".form").serialize(),
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function() {
                        $(".form")[0].reset();
                        $(location).attr('href', 'thank.html')
                    },
                    200: function() {
                        $(".form")[0].reset();
                        $(location).attr('href', 'thank.html')
                    }
                }
            });
            return false
        }
    });
    $(".form2").validate({
       rules: {
            "entry.607228889": {
                required: true,
            },
            "entry.347180062": {
                required: true,
                phoneUK: true
            },
            'entry.1375519652': {
                required: true,
            },
            'entry.1521458336': {
                required: true,
            },
        },
        messages: {
            "entry.607228889": {
                required: "* Vui lòng nhập họ tên",
            },
            "entry.347180062": {
                required: "* Vui lòng nhập số điện thoại",
            },
            'entry.1375519652': {
                required: "* Vui lòng nhập link Facebook cá nhân",
            },
            'entry.1521458336': {
                required: "* Vui lòng nhập link Video Livestream",
            },
        },
        submitHandler: function(form) {
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSclV5sTVW2TK7oVNGCYe39bXc7DQGlSK-wFSi9qnTSzoe_coA/formResponse",
                data: $(".form2").serialize(),
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function() {
                        $(".form2")[0].reset();
                        $(location).attr('href', 'thank.html')
                    },
                    200: function() {
                        $(".form2")[0].reset();
                        $(location).attr('href', 'thank.html')
                    }
                }
            });
            return false
        }
    });
    $(".form3").validate({
       rules: {
            "entry.607228889": {
                required: true,
            },
            "entry.347180062": {
                required: true,
                phoneUK: true
            },
            'entry.1375519652': {
                required: true,
            },
            'entry.1521458336': {
                required: true,
            },
        },
        messages: {
            "entry.607228889": {
                required: "* Vui lòng nhập họ tên",
            },
            "entry.347180062": {
                required: "* Vui lòng nhập số điện thoại",
            },
            'entry.1375519652': {
                required: "* Vui lòng nhập link Facebook cá nhân",
            },
            'entry.1521458336': {
                required: "* Vui lòng nhập link Video Livestream",
            },
        },
        submitHandler: function(form) {
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSclV5sTVW2TK7oVNGCYe39bXc7DQGlSK-wFSi9qnTSzoe_coA/formResponse",
                data: $(".form3").serialize(),
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function() {
                        $(".form3")[0].reset();
                        $(location).attr('href', 'thank.html')
                    },
                    200: function() {
                        $(".form3")[0].reset();
                        $(location).attr('href', 'thank.html')
                    }
                }
            });
            return false
        }
    })
});