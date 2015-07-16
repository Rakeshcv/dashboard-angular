'use strict';

describe('Directive: dashboardMenuItem', function () {

  // load the directive's module
  beforeEach(module('dashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dashboard-menu-item></dashboard-menu-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dashboardMenuItem directive');
  }));
});
