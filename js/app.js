var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

'use strict';

angular.module('mgcrea.ngStrapDocs')

app.controller('DatepickerDemoCtrl', function($scope) {
    $scope.selectedDate = new Date();
    $scope.getType = function(key) {
        return Object.prototype.toString.call($scope[key]);
    };

    $scope.clearDates = function() {
        $scope.selectedDate = null;
    };
});

app.controller("loginCtrl", function($scope,$http, $alert) {
    var parol = $alert({
        title: "Невірний пароль",
        //content: 'Best check yo self, you\'re not looking too good.',
        //placement: 'top',
        type: 'danger',
        container : "#error_msg",
        duration : '3',
        show: false

    });
    $scope.logins = {}
    $http.post("http://10.7.131.134/exampleService/PostWithZero/")
        .success(function (data) {

            $scope.logins = JSON.parse(data);
        })
        .error(function (data)
        {
            $scope.error = "SUBMIT ERROR";
        });
    $scope.login_submit = function(){

        var user_info = {Id:$scope.user_id, Pass:$scope.user_pass }
        $http.post("http://10.7.131.134/exampleService/UserRegistry/",user_info)

            .success(function (data) {
                console.log(user_info)
                console.log(data)
                if (data === true){
                    window.location.replace("http://10.7.131.134/servicedocs_angular/client_page.html");
                }
                else{
                    parol.show();
                }

            })
            .error(function (data){
                console.log(user_info)
                console.log(data)
            });
    }
});