'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.decorator:Exception
 * @description
 * # Exception
 * Decorator of the dashboardApp
 */
angular.module('dashboardApp')
  .config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
      return function (exception, cause) {
        $delegate(exception, cause);
        alert(exception.message);
      };
    }]);
  });
