'use strict';

/**
 * @ngdoc function
 * @name adminitApp.controller:AddController
 * @description
 * # AddController
 * Controller of the adminitApp
 */
angular.module('adminitApp')
    .controller('AddController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.save = function () {
            $http.post("http://api.adminit.ml/cards",
            {
                owner: $scope.owner,
                title: $scope.title,
                content: $scope.content}
            )
            .then(function(response){
                $location.path('/#');
            });
        }

    }]);
