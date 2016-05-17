'use strict';

/**
 * @ngdoc function
 * @name adminitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminitApp
 */
angular.module('adminitApp')
    .controller('AboutCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });