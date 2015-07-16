'use strict';

describe('Controller: DashboardmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var DashboardmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardmenuCtrl = $controller('DashboardmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
