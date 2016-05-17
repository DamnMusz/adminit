'use strict';

/**
 * @ngdoc overview
 * @name adminitApp
 * @description
 * # adminitApp
 *
 * Main module of the application.
 */
angular
  .module('adminitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])


  .run(function () {
    var mdlUpgradeDom = false;
    setInterval(function() {
      if (mdlUpgradeDom) {
        componentHandler.upgradeDom();
        mdlUpgradeDom = false;
      }
    }, 200);

    var observer = new MutationObserver(function () {
      mdlUpgradeDom = true;
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    /* support <= IE 10
    angular.element(document).bind('DOMNodeInserted', function(e) {
        mdlUpgradeDom = true;
    });
    */
  })

  // .config(function(mdlConfigProvider){
  //   mdlConfigProvider.floating = false;
  //   mdlConfigProvider.rippleEffect = false;
  // })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.view.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.view.html',
        controller: 'AboutCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.view.html',
        controller: 'AddController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
