'use strict';

/**
 * @ngdoc function
 * @name minervaioApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the minervaioApp
 */
angular.module('minervaioApp')
  .controller('NavCtrl', function ($scope, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.$on('$routeChangeSuccess', function() {
     $scope.home = ($window.location.hash.replace('#/', '') !== '');
   });

   $scope.home = ($window.location.hash.replace('#/', '') !== '');
  });
