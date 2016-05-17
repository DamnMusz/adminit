'use strict';

/**
 * @ngdoc function
 * @name adminitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminitApp
 */
angular.module('adminitApp')
    .controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.cards = [];

        $http.get("http://api.adminit.ml/cards")
        .then(function(response){
            $scope.cards = response.data;
        });

        $scope.delete = function(card) {
            $http.delete("http://api.adminit.ml/cards/" + card.id)
            .then(function(response){
                var cardIndex = 0;
                for (var cardIndex = 0; cardIndex < $scope.cards.length; cardIndex++) {
                    if ( $scope.cards[cardIndex].id == card.id ) {
                        $scope.cards.splice(cardIndex, 1);
                        break;
                    }
                }
            });
        };

        $scope.add = function() {
            $location.path('/add');
        }

    }]);
