'use strict';

/**
 * @ngdoc overview
 * @name minervaioApp
 * @description
 * # minervaioApp
 *
 * Main module of the application.
 */
angular
  .module('minervaioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/team', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });
