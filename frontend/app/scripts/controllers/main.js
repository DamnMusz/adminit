'use strict';

/**
 * @ngdoc function
 * @name adminitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminitApp
 */
angular.module('adminitApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.echo = function() {
            $http.get("http://urlecho.appspot.com/echo?status=200&Content-Type=text%2Fhtml&body=Hello%20world!").
            then(function(response){
                $scope.echoMessage = response.data;
            });
        };

    });
