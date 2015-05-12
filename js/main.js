$( document ).ready(function() {
    $.ajax({
        type: "POST",
        url: "http://10.7.131.134/exampleService/PostWithOnePrim/",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            alert(data);
        },
        error: function() {
            alert("Error");
        }
    });
});
