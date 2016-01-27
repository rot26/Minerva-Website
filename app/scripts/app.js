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
    'ngTouch',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'VentureCtrl'
      })
      .when('/do', {
        templateUrl: 'views/do.html',
        controller: 'DoCtrl'
      })
      .when('/venture', {
        templateUrl: 'views/venture.html',
        controller: 'VentureCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      });
  });
