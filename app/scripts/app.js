'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(['$routeProvider', function ($routeProvider) {

    var routes = [
      {
        url: '/dashboard',
        config: {
          template: '<></>'
        }
      }

    ];
    routes.forEach(function (route) {
      $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);




