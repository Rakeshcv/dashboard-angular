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

    this.getActiveElement = function(){
      return $scope.activeElement;
    };

    this.setActiveElement = function(element){
      $scope.activeElement = element;
    };

    this.setRoute = function (route){
      $rootScope.$broadcast('menu-route',{route:route});
    };

  }]);
