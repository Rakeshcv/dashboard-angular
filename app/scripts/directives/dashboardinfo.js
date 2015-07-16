'use strict';

/**
 * @ngdoc directive
 * @name dashboardApp.directive:dashboardInfo
 * @description
 * # dashboardInfo
 */
angular.module('dashboardApp')
  .directive('dashboardInfo', function () {
    return{
      transclude: true,
      scope: {
        title: '@',
        subtitle: '@',
        iconUrl: '@'
      },
      controller: 'DashboardCtrl',
      templateUrl: 'views/dashboardtemplate.html'
    }
  });
