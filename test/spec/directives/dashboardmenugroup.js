'use strict';

describe('Directive: dashboardMenuGroup', function () {

  // load the directive's module
  beforeEach(module('dashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dashboard-menu-group></dashboard-menu-group>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dashboardMenuGroup directive');
  }));
});
