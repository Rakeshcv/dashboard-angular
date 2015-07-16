'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl',['$scope','$window','$timeout', function ($scope,$window,$timeout) {

    $scope.$on('menu-route', function (event, data) {
      $scope.routeString = data.route;
    });


    $($window).on('resize.dashboardButton', function () {
      $scope.$apply(function () {

        checkWidth();
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

    $scope.menuButtonClicked = function(){
      $scope.isMenuVisible = !$scope.isMenuVisible;
      $scope.$apply();
    };

    $timeout(function () {
      checkWidth();
    },0);
  }]);
