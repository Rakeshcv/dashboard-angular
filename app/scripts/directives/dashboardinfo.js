'use strict';

/**
 * @ngdoc directive
 * @name dashboardApp.directive:dashboardInfo
 * @description
 * # dashboardInfo
 */
angular.module('dashboardApp')
  .directive('dashboardInfo', function () {
    return {
      transclude: false,
      restrict: 'AE',
      templateUrl: 'views/dashboardtemplate.html',
      controller: 'DashboardCtrl'
    };
  });
