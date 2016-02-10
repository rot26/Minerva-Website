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
     console.log($window.location.pathname);
     $scope.home = ($window.location.pathname != '/');
   });

   $scope.home = ($window.location.pathname != '/');
  });
