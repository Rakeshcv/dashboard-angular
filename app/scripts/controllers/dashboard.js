'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl',['$scope','$window','$timeout','$rootScope', function ($scope,$window,$timeout,$rootScope) {

    $scope.$on('menu-route', function (event, data) {
      $scope.routeString = data.route;
      checkWidth();
      broadcastMenuState();
    });


    $($window).on('resize.dashboardButton', function () {
      $scope.$apply(function () {

        checkWidth();
        broadcastMenuState();
      })
    });

    $scope.$on('destroy', function () {
      $($window).off('resize.dashboardButton');
    });


    function checkWidth() {
      var width = $($window).innerWidth();
      $scope.isMenuVisible = (width > 768);
      $scope.isMenuButtonVisible = ! $scope.isMenuVisible;
    }

    var broadcastMenuState = function () {
      $rootScope.$broadcast('show-menu',{show:$scope.isMenuVisible});
    };


    $scope.menuButtonClicked = function(){
      $scope.isMenuVisible = !$scope.isMenuVisible;
      broadcastMenuState();
    };

    $timeout(function () {
      checkWidth();
      broadcastMenuState();
    },0);


    $scope.$on('menu-orientation', function (event, data) {
      $scope.isMenuVertical = data.isMenuVertical;
    })
  }]);
