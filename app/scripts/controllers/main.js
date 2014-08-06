'use strict';

/**
 * @ngdoc function
 * @name angularHome2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHome2App
 */
angular.module('angularHome2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
