'use strict';

/**
 * @ngdoc function
 * @name adminitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminitApp
 */
angular.module('adminitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
