'use strict';

/**
 * @ngdoc directive
 * @name dashboardApp.directive:dashboardMenu
 * @description
 * # dashboardMenu
 */
angular.module('dashboardApp')
  .directive('dashboardMenu', function () {
    return{
      restrict: 'AE',
      transclude: true,
      scope:{

      },
      controller: 'DashboardmenuCtrl',
      templateUrl: 'views/dashboardmenutemplate.html',
      link: function(scope,el,attr){

      }
    };
  });
