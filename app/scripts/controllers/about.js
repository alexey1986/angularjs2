'use strict';

/**
 * @ngdoc function
 * @name angularHome2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHome2App
 */
angular.module('angularHome2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
