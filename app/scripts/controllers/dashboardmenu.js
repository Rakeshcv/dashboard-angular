'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardmenuCtrl
 * @description
 * # DashboardmenuCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardmenuCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {

    $scope.showMenu = true;
    $scope.isVertical = true;

    this.getActiveElement = function(){
      return $scope.activeElement;
    };

    this.setActiveElement = function(element){
      $scope.activeElement = element;
    };

    this.setRoute = function (route){
      $rootScope.$broadcast('menu-route',{route:route});
    };

    this.isVertical = function(){
      return $scope.isVertical;
    };

    this.setOpenMenuScope = function (scope) {
      $scope.openMenuScope = scope;
    };

    $scope.$on('show-menu',function(event,data){
      $scope.showMenu = data.show;
    });

    $scope.toggleMenuOrientation = function(){

      // close any open menu
      if ($scope.openMenuScope)
        $scope.openMenuScope.closeMenu();

      $scope.isVertical = !$scope.isVertical;
      $rootScope.$broadcast('menu-orientation',{isMenuVertical:$scope.isVertical});
    };

    angular.element(document).bind('click', function (e) {
      if ($scope.openMenuScope && !$scope.isVertical) {
        if ($(e.target).parent().hasClass('selectable-menu'))
          return;
        $scope.$apply(function () {
          $scope.openMenuScope.closeMenu();
        });
        e.preventDefault();
        e.stopPropagation();
      }
    });


  }]);
