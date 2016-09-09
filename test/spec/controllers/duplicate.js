'use strict';

describe('Controller: DuplicateCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var DuplicateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DuplicateCtrl = $controller('DuplicateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DuplicateCtrl.awesomeThings.length).toBe(3);
  });
});
