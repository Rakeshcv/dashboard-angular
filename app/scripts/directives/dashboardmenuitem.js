'use strict';

/**
 * @ngdoc directive
 * @name dashboardApp.directive:dashboardMenuItem
 * @description
 * # dashboardMenuItem
 */
angular.module('dashboardApp')
  .directive('dashboardMenuItem', function () {
    return{
      restrict: 'AE',
      require: '^dashboardMenu',
      scope:{
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'views/dashboardmenuitemtemplate.html'
    };
  });
