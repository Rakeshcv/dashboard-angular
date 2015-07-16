"use strict";angular.module("dashboardApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]),angular.module("dashboardApp").directive("dashboardInfo",function(){return{transclude:!0,scope:{title:"@",subtitle:"@",iconUrl:"@"},controller:"DashboardCtrl",templateUrl:"views/dashboardtemplate.html"}}),angular.module("dashboardApp").controller("DashboardCtrl",["$scope","$window","$timeout","$rootScope",function(a,b,c,d){function e(){var c=$(b).innerWidth();a.isMenuVisible=c>768,a.isMenuButtonVisible=!a.isMenuVisible}a.$on("menu-route",function(b,c){a.routeString=c.route,e(),f()}),$(b).on("resize.dashboardButton",function(){a.$apply(function(){e(),f()})}),a.$on("destroy",function(){$(b).off("resize.dashboardButton")});var f=function(){d.$broadcast("show-menu",{show:a.isMenuVisible})};a.menuButtonClicked=function(){a.isMenuVisible=!a.isMenuVisible,f()},c(function(){e(),f()},0)}]),angular.module("dashboardApp").config(["$provide",function(a){a.decorator("$exceptionHandler",["$delegate",function(a){return function(b,c){a(b,c),alert(b.message)}}])}]),angular.module("dashboardApp").directive("dashboardMenu",function(){return{restrict:"AE",transclude:!0,scope:{},controller:"DashboardmenuCtrl",templateUrl:"views/dashboardmenutemplate.html",link:function(a,b,c){}}}),angular.module("dashboardApp").directive("dashboardMenuItem",function(){return{restrict:"AE",require:"^dashboardMenu",scope:{label:"@",icon:"@",route:"@"},templateUrl:"views/dashboardmenuitemtemplate.html",link:function(a,b,c,d){b.on("click",function(c){c.stopPropagation(),c.preventDefault(),a.$apply(function(){d.setActiveElement(b),d.setRoute(a.route)})}),a.isActive=function(){return b===d.getActiveElement()}}}}),angular.module("dashboardApp").controller("DashboardmenuCtrl",["$scope","$rootScope",function(a,b){a.showMenu=!0,this.getActiveElement=function(){return a.activeElement},this.setActiveElement=function(b){a.activeElement=b},this.setRoute=function(a){b.$broadcast("menu-route",{route:a})},a.$on("show-menu",function(b,c){a.showMenu=c.show})}]);