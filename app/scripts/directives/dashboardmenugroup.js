'use strict';

/**
 * @ngdoc directive
 * @name dashboardApp.directive:dashboardMenuGroup
 * @description
 * # dashboardMenuGroup
 */
angular.module('dashboardApp')
  .directive('dashboardMenuGroup', function () {
    return{
      transclude: true,
      require: '^dashboardMenu',
      scope:{
        label: '@',
        icon: '@'
      },
      templateUrl: 'views/dashboardmenugrouptemplate.html',
      link: function(scope,el,attr,ctrl){
        scope.isOpen = false;
        scope.closeMenu = function(){
          scope.isOpen = false;
        };

        scope.isVertical = function(){
          return ctrl.isVertical() || el.parents('.indent').length > 0 ;
        };

        scope.clicked = function(){
          scope.isOpen = !scope.isOpen;

          if (el.parents('.indent').length == 0)
            scope.setsubMenuPosition();


          ctrl.setOpenMenuScope(scope);
        };

        scope.setsubMenuPosition = function(){
          var pos = el.offset();
          $('.indent').css({'left':pos.left + 20, 'top' : 36});
        };
      }
    }
  });
