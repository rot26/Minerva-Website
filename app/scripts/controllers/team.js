'use strict';

/**
 * @ngdoc function
 * @name minervaioApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the minervaioApp
 */
angular.module('minervaioApp')
  .controller('TeamCtrl', function ($scope, team) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.team = team.data;

  });
