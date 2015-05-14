$( document ).ready(function() {
    var data1 =
    {
        "input": "1"
    };

    addData(data1);

    function addData(data)
    {
        $.ajax({
            type: "POST",
            url: "http://10.7.131.134/exampleService/PostWithOnePrim/",
            data: JSON.stringify(data),
            //contentType: "application/json",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var logins = JSON.parse(data);
                console.log( logins.Name );
                $('#user_name option').val(logins.Id);
                $('#user_name option').text(logins.Name);
            },
            error: function() {
                alert("Error");
            }

        });
    }
    $("#login-btn").click(function submitButton() {
        var Auth = {
            login: $('#inputLoginEmail').val(), // this is fours line
            password: $('#login_password').val()
        };
        addData(Auth);
    });
    $("#submit").click(function registerButton() {
//
        var user = {
            Name: $('#user_name option').text(),
            id:   $('#user_name option').val(),
            pass: $('#password').text()
        };
        var str_user = JSON.stringify(user);
        console.log(str_user);
        addUser(str_user);
    });
    function addUser(data)
    {
        $.ajax({
            type: "POST",
            url: "http://10.7.131.134/exampleService/UserRegistry/",
            data: JSON.stringify(data),
            //contentType: "application/json",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                alert("Success");
            },
            error: function() {
                alert("Error");
            }

        });
    }
});