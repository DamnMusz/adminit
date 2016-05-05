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
            $http.get("http://api.adminit.ml/cards").
            then(function(response){
                $scope.echoMessage = response.data;
            });
        };

    });
