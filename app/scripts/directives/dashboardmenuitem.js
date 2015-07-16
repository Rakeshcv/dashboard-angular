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
      templateUrl: 'views/dashboardmenuitemtemplate.html',
      link: function(scope,el,attr,ctrl){

        el.on('click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          scope.$apply(function () {
            ctrl.setActiveElement(el);
            ctrl.setRoute(scope.route);
          });
        });


        scope.isActive = function(){
          return el === ctrl.getActiveElement();
        };
      }
    };
  });
