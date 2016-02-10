'use strict';

/**
 * @ngdoc function
 * @name minervaioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minervaioApp
 */
angular.module('minervaioApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$routeChangeSuccess', function() {
      $scope.home = ($window.location.pathname === '/');
    });

    $scope.home = ($window.location.pathname === '/');
  });
