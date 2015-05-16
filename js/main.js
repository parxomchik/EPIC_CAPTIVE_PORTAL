$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "http://10.7.131.134/exampleService/PostWithZero/",
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var logins = JSON.parse(data);
            $('#user_name option').val(logins.Id);
            $('#user_name option').text(logins.Name);
        },
        error: function() {
            alert("Error");
        }
    });
    $("#submit").click(function registerButton() {
        var user = {
            "Id":   $('#user_name option').val(),
            //"Name": $('#user_name option').text(),
            "Pass": $('.form-signin #password').val()
        };
        //var str_user = JSON.stringify(user);
        console.log(user);
        addUser(user);
    });
    function addUser(data)
    {
        $.ajax({
            type: "POST",
            url: "http://10.7.131.134/exampleService/UserRegistry/",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data === true){
                    window.location.replace("http://10.7.131.134/servicedocs/client_page.html");
                }
                else {
                    alert('Neverniy parol');
                }
            },
            error: function() {
                alert("Net otveta ot servera");
            }

        });
    }
});