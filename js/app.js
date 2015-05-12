var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('MainCtrl', function($scope) {
});

'use strict';

angular.module('mgcrea.ngStrapDocs')

app.controller('DatepickerDemoCtrl', function($scope, $http) {
    $scope.selectedDate = new Date();
    //$scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
    // $scope.fromDate = new Date();
    // $scope.untilDate = new Date();
    $scope.getType = function(key) {
        return Object.prototype.toString.call($scope[key]);
    };

    $scope.clearDates = function() {
        $scope.selectedDate = null;
    };
});

