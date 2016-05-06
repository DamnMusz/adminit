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
        $scope.cards = [];

        $http.get("http://api.adminit.ml/cards").
        then(function(response){
            $scope.cards = response.data;
        });

    });
